import supabase from '../supabase/client';
import { CardType } from '../types';

export interface FoundCardData {
  nameOnCard: string;
  cardType: CardType;
  lastFourDigits?: string;
  foundLocation: string;
  description?: string;
  finderName: string;
  finderEmail: string;
  finderPhone: string;
  cardPhoto?: File;
}

export const FoundCardService = {
  async submitFoundCard(data: FoundCardData) {
    const user = await supabase.auth.getUser();
    const userId = user.data.user?.id;
    
    // Upload image if provided
    let cardImageUrl = null;
    if (data.cardPhoto) {
      const fileName = `${userId || 'anonymous'}-${Date.now()}-${data.cardPhoto.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('card-images')
        .upload(fileName, data.cardPhoto, {
          cacheControl: '3600',
          upsert: false,
        });
      
      if (uploadError) throw uploadError;
      
      // Get public URL
      const { data: urlData } = supabase.storage
        .from('card-images')
        .getPublicUrl(fileName);
      
      cardImageUrl = urlData.publicUrl;
    }
    
    // Insert found card record
    const { data: cardData, error } = await supabase
      .from('found_cards')
      .insert({
        card_type: data.cardType,
        name_on_card: data.nameOnCard,
        last_four_digits: data.lastFourDigits || null,
        location_found: data.foundLocation,
        description: data.description || null,
        card_image_url: cardImageUrl,
        finder_id: userId || '00000000-0000-0000-0000-000000000000', // Anonymous user ID if not logged in
        finder_contact: {
          name: data.finderName,
          email: data.finderEmail,
          phone: data.finderPhone,
        },
        status: 'pending',
      })
      .select()
      .single();
    
    if (error) throw error;
    
    return cardData;
  },
  
  async getFoundCards(filters?: {
    nameOnCard?: string;
    cardType?: CardType;
    lastFourDigits?: string;
    location?: string;
  }) {
    let query = supabase
      .from('found_cards')
      .select('*')
      .eq('status', 'approved');
    
    if (filters?.nameOnCard) {
      query = query.ilike('name_on_card', `%${filters.nameOnCard}%`);
    }
    
    if (filters?.cardType) {
      query = query.eq('card_type', filters.cardType);
    }
    
    if (filters?.lastFourDigits) {
      query = query.eq('last_four_digits', filters.lastFourDigits);
    }
    
    if (filters?.location) {
      query = query.ilike('location_found', `%${filters.location}%`);
    }
    
    const { data, error } = await query.order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },
  
  async getFoundCardById(id: string) {
    const { data, error } = await supabase
      .from('found_cards')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },
  
  async getUserFoundCards() {
    const user = await supabase.auth.getUser();
    
    if (!user.data.user) {
      throw new Error('User not authenticated');
    }
    
    const { data, error } = await supabase
      .from('found_cards')
      .select('*')
      .eq('finder_id', user.data.user.id)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },
};

export default FoundCardService;