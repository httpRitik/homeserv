/*
  # Initial Schema Setup for HomeServ App

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - full_name (text)
      - phone (text)
      - avatar_url (text)
      - user_type (text) - 'customer' or 'provider'
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - service_categories
      - id (uuid, primary key)
      - name (text)
      - icon (text)
      - color (text)
      - image_url (text)
      - created_at (timestamp)
    
    - services
      - id (uuid, primary key)
      - category_id (uuid, foreign key)
      - provider_id (uuid, foreign key)
      - name (text)
      - description (text)
      - price (numeric)
      - duration (interval)
      - image_url (text)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - bookings
      - id (uuid, primary key)
      - service_id (uuid, foreign key)
      - customer_id (uuid, foreign key)
      - provider_id (uuid, foreign key)
      - status (text)
      - scheduled_at (timestamp)
      - duration (interval)
      - price (numeric)
      - address (text)
      - created_at (timestamp)
      - updated_at (timestamp)
    
    - reviews
      - id (uuid, primary key)
      - booking_id (uuid, foreign key)
      - customer_id (uuid, foreign key)
      - provider_id (uuid, foreign key)
      - rating (integer)
      - comment (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  phone text,
  avatar_url text,
  user_type text NOT NULL CHECK (user_type IN ('customer', 'provider')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Service Categories table
CREATE TABLE service_categories (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  icon text NOT NULL,
  color text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE service_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read categories" ON service_categories
  FOR SELECT USING (true);

-- Services table
CREATE TABLE services (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id uuid REFERENCES service_categories(id) ON DELETE CASCADE,
  provider_id uuid REFERENCES users(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  price numeric NOT NULL CHECK (price >= 0),
  duration interval NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read services" ON services
  FOR SELECT USING (true);

CREATE POLICY "Providers can create their services" ON services
  FOR INSERT WITH CHECK (auth.uid() = provider_id);

CREATE POLICY "Providers can update their services" ON services
  FOR UPDATE USING (auth.uid() = provider_id);

-- Bookings table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  service_id uuid REFERENCES services(id) ON DELETE RESTRICT,
  customer_id uuid REFERENCES users(id) ON DELETE RESTRICT,
  provider_id uuid REFERENCES users(id) ON DELETE RESTRICT,
  status text NOT NULL CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  scheduled_at timestamptz NOT NULL,
  duration interval NOT NULL,
  price numeric NOT NULL CHECK (price >= 0),
  address text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Customers can read their bookings" ON bookings
  FOR SELECT USING (auth.uid() = customer_id);

CREATE POLICY "Providers can read their bookings" ON bookings
  FOR SELECT USING (auth.uid() = provider_id);

CREATE POLICY "Customers can create bookings" ON bookings
  FOR INSERT WITH CHECK (auth.uid() = customer_id);

-- Reviews table
CREATE TABLE reviews (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_id uuid REFERENCES bookings(id) ON DELETE CASCADE,
  customer_id uuid REFERENCES users(id) ON DELETE RESTRICT,
  provider_id uuid REFERENCES users(id) ON DELETE RESTRICT,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read reviews" ON reviews
  FOR SELECT USING (true);

CREATE POLICY "Customers can create reviews" ON reviews
  FOR INSERT WITH CHECK (auth.uid() = customer_id);

-- Add indexes for better query performance
CREATE INDEX idx_services_category ON services(category_id);
CREATE INDEX idx_services_provider ON services(provider_id);
CREATE INDEX idx_bookings_customer ON bookings(customer_id);
CREATE INDEX idx_bookings_provider ON bookings(provider_id);
CREATE INDEX idx_reviews_booking ON reviews(booking_id);
CREATE INDEX idx_reviews_provider ON reviews(provider_id);