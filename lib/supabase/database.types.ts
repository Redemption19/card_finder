export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          role: 'user' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      found_cards: {
        Row: {
          id: string
          card_type: string
          name_on_card: string
          last_four_digits: string | null
          location_found: string
          card_image_url: string | null
          finder_id: string
          finder_contact: Json
          status: 'pending' | 'matched' | 'returned' | 'rejected'
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          card_type: string
          name_on_card: string
          last_four_digits?: string | null
          location_found: string
          card_image_url?: string | null
          finder_id: string
          finder_contact: Json
          status?: 'pending' | 'matched' | 'returned' | 'rejected'
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          card_type?: string
          name_on_card?: string
          last_four_digits?: string | null
          location_found?: string
          card_image_url?: string | null
          finder_id?: string
          finder_contact?: Json
          status?: 'pending' | 'matched' | 'returned' | 'rejected'
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      lost_reports: {
        Row: {
          id: string
          card_type: string
          name_on_card: string
          last_four_digits: string | null
          owner_contact: Json
          status: 'open' | 'matched' | 'closed'
          user_id: string
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          card_type: string
          name_on_card: string
          last_four_digits?: string | null
          owner_contact: Json
          status?: 'open' | 'matched' | 'closed'
          user_id: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          card_type?: string
          name_on_card?: string
          last_four_digits?: string | null
          owner_contact?: Json
          status?: 'open' | 'matched' | 'closed'
          user_id?: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      matches: {
        Row: {
          id: string
          found_card_id: string
          lost_report_id: string
          status: 'pending' | 'confirmed' | 'rejected'
          token_paid: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          found_card_id: string
          lost_report_id: string
          status?: 'pending' | 'confirmed' | 'rejected'
          token_paid?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          found_card_id?: string
          lost_report_id?: string
          status?: 'pending' | 'confirmed' | 'rejected'
          token_paid?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          title: string
          message: string
          type: string
          related_card_id: string | null
          is_read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          message: string
          type: string
          related_card_id?: string | null
          is_read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          message?: string
          type?: string
          related_card_id?: string | null
          is_read?: boolean
          created_at?: string
        }
      }
    }
  }
}