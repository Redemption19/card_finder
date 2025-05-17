import supabase from '../supabase/client';

export interface MatchRequestData {
  foundCardId: string;
  lostReportId: string;
}

export const MatchService = {
  async requestMatch({ foundCardId, lostReportId }: MatchRequestData) {
    const user = await supabase.auth.getUser();
    
    if (!user.data.user) {
      throw new Error('User must be authenticated to request a match');
    }
    
    // Verify the user owns the lost report
    const { data: reportData, error: reportError } = await supabase
      .from('lost_reports')
      .select('*')
      .eq('id', lostReportId)
      .eq('user_id', user.data.user.id)
      .single();
    
    if (reportError || !reportData) {
      throw new Error('You can only request matches for your own lost reports');
    }
    
    // Create the match
    const { data: matchData, error } = await supabase
      .from('matches')
      .insert({
        found_card_id: foundCardId,
        lost_report_id: lostReportId,
        status: 'pending',
        token_paid: false,
      })
      .select()
      .single();
    
    if (error) throw error;
    
    // Get the found card to notify the finder
    const { data: foundCard } = await supabase
      .from('found_cards')
      .select('*')
      .eq('id', foundCardId)
      .single();
    
    if (foundCard) {
      // Create notification for the finder
      await supabase
        .from('notifications')
        .insert({
          user_id: foundCard.finder_id,
          title: 'Match Request',
          message: `Someone has claimed the ${foundCard.card_type} you found for ${foundCard.name_on_card}`,
          type: 'card_claimed',
          related_card_id: foundCardId,
        });
    }
    
    return matchData;
  },
  
  async confirmTokenPayment(matchId: string) {
    const user = await supabase.auth.getUser();
    
    if (!user.data.user) {
      throw new Error('User must be authenticated to confirm token payment');
    }
    
    // Get the match details
    const { data: matchData, error: matchError } = await supabase
      .from('matches')
      .select(`
        *,
        found_cards(*),
        lost_reports(*)
      `)
      .eq('id', matchId)
      .single();
    
    if (matchError || !matchData) {
      throw new Error('Match not found');
    }
    
    // Verify the user is the finder
    if (matchData.found_cards.finder_id !== user.data.user.id) {
      throw new Error('Only the finder can confirm token payment');
    }
    
    // Update the match
    const { data, error } = await supabase
      .from('matches')
      .update({
        token_paid: true,
        status: 'confirmed',
      })
      .eq('id', matchId)
      .select()
      .single();
    
    if (error) throw error;
    
    // Create notification for the card owner
    await supabase
      .from('notifications')
      .insert({
        user_id: matchData.lost_reports.user_id,
        title: 'Token Payment Confirmed',
        message: 'The finder has confirmed receipt of your token payment',
        type: 'token_paid',
        related_card_id: matchData.found_card_id,
      });
    
    return data;
  },
  
  async getUserMatches() {
    const user = await supabase.auth.getUser();
    
    if (!user.data.user) {
      throw new Error('User not authenticated');
    }
    
    // Get matches where the user is either the finder or the card owner
    const { data, error } = await supabase
      .from('matches')
      .select(`
        *,
        found_cards(*),
        lost_reports(*)
      `)
      .or(`found_cards.finder_id.eq.${user.data.user.id},lost_reports.user_id.eq.${user.data.user.id}`)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },
};

export default MatchService;