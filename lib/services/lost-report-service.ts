import supabase from '../supabase/client';
import { CardType } from '../types';

export interface LostReportData {
  nameOnCard: string;
  cardType: CardType;
  lastFourDigits?: string;
  lostLocation?: string;
  lostDate?: Date;
  description?: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
}

export const LostReportService = {
  async submitLostReport(data: LostReportData) {
    const user = await supabase.auth.getUser();
    const userId = user.data.user?.id;
    
    if (!userId) {
      throw new Error('User must be authenticated to submit a lost report');
    }
    
    const { data: reportData, error } = await supabase
      .from('lost_reports')
      .insert({
        card_type: data.cardType,
        name_on_card: data.nameOnCard,
        last_four_digits: data.lastFourDigits || null,
        description: data.description || null,
        user_id: userId,
        owner_contact: {
          name: data.ownerName,
          email: data.ownerEmail,
          phone: data.ownerPhone,
        },
        status: 'open',
      })
      .select()
      .single();
    
    if (error) throw error;
    
    return reportData;
  },
  
  async getUserLostReports() {
    const user = await supabase.auth.getUser();
    
    if (!user.data.user) {
      throw new Error('User not authenticated');
    }
    
    const { data, error } = await supabase
      .from('lost_reports')
      .select('*')
      .eq('user_id', user.data.user.id)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },
  
  async getLostReportById(id: string) {
    const { data, error } = await supabase
      .from('lost_reports')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },
};

export default LostReportService;