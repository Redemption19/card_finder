-- Create enum types
CREATE TYPE user_role AS ENUM ('user', 'admin');
CREATE TYPE card_status AS ENUM ('pending', 'matched', 'returned', 'rejected');
CREATE TYPE report_status AS ENUM ('open', 'matched', 'closed');
CREATE TYPE match_status AS ENUM ('pending', 'confirmed', 'rejected');

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table (extends Supabase auth.users)
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT NOT NULL,
  role user_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create found_cards table
CREATE TABLE found_cards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  card_type TEXT NOT NULL,
  name_on_card TEXT NOT NULL,
  last_four_digits TEXT,
  location_found TEXT NOT NULL,
  card_image_url TEXT,
  finder_id UUID REFERENCES users(id) NOT NULL,
  finder_contact JSONB NOT NULL,
  status card_status NOT NULL DEFAULT 'pending',
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create lost_reports table
CREATE TABLE lost_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  card_type TEXT NOT NULL,
  name_on_card TEXT NOT NULL,
  last_four_digits TEXT,
  owner_contact JSONB NOT NULL,
  status report_status NOT NULL DEFAULT 'open',
  user_id UUID REFERENCES users(id) NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create matches table
CREATE TABLE matches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  found_card_id UUID REFERENCES found_cards(id) NOT NULL,
  lost_report_id UUID REFERENCES lost_reports(id) NOT NULL,
  status match_status NOT NULL DEFAULT 'pending',
  token_paid BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create notifications table
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL,
  related_card_id UUID,
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Set up Row Level Security (RLS)
-- Users table RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own data" 
  ON users FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Admin users can view all user data" 
  ON users FOR SELECT 
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Found cards RLS
ALTER TABLE found_cards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Found cards are viewable by everyone" 
  ON found_cards FOR SELECT 
  USING (true);

CREATE POLICY "Users can insert their own found cards" 
  ON found_cards FOR INSERT 
  WITH CHECK (auth.uid() = finder_id);

CREATE POLICY "Users can update their own found cards" 
  ON found_cards FOR UPDATE 
  USING (auth.uid() = finder_id);

CREATE POLICY "Admin users can update any found card" 
  ON found_cards FOR UPDATE 
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Lost reports RLS
ALTER TABLE lost_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own lost reports" 
  ON lost_reports FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Admin users can view all lost reports" 
  ON lost_reports FOR SELECT 
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Users can insert their own lost reports" 
  ON lost_reports FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own lost reports" 
  ON lost_reports FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Admin users can update any lost report" 
  ON lost_reports FOR UPDATE 
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Matches RLS
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view matches related to their cards or reports" 
  ON matches FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM found_cards WHERE id = found_card_id AND finder_id = auth.uid()
    ) OR EXISTS (
      SELECT 1 FROM lost_reports WHERE id = lost_report_id AND user_id = auth.uid()
    )
  );

CREATE POLICY "Admin users can view all matches" 
  ON matches FOR SELECT 
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Admin users can update any match" 
  ON matches FOR UPDATE 
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Notifications RLS
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own notifications" 
  ON notifications FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own notifications" 
  ON notifications FOR UPDATE 
  USING (auth.uid() = user_id);

-- Create functions and triggers
-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_found_cards_updated_at
BEFORE UPDATE ON found_cards
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_lost_reports_updated_at
BEFORE UPDATE ON lost_reports
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_matches_updated_at
BEFORE UPDATE ON matches
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();