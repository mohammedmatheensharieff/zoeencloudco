/*
  # Initial Schema Setup for IT Company Website

  1. New Tables
    - profiles
      - id (uuid, primary key)
      - user_type (text) - 'admin' or 'user'
      - full_name (text)
      - created_at (timestamp)
    
    - internships
      - id (uuid, primary key)
      - title (text)
      - description (text)
      - price (numeric)
      - duration_weeks (integer)
      - created_at (timestamp)
    
    - enrollments
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - internship_id (uuid, foreign key)
      - status (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for data access
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  user_type text NOT NULL CHECK (user_type IN ('admin', 'user')),
  full_name text,
  created_at timestamptz DEFAULT now()
);

-- Create internships table
CREATE TABLE internships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL CHECK (price >= 0),
  duration_weeks integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create enrollments table
CREATE TABLE enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id),
  internship_id uuid REFERENCES internships(id),
  status text NOT NULL CHECK (status IN ('pending', 'active', 'completed')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE internships ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Internships policies
CREATE POLICY "Anyone can view internships"
  ON internships FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Only admins can manage internships"
  ON internships FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.user_type = 'admin'
  ));

-- Enrollments policies
CREATE POLICY "Users can view their own enrollments"
  ON enrollments FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create their own enrollments"
  ON enrollments FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Insert initial internship data
INSERT INTO internships (title, description, price, duration_weeks) VALUES
('DevOps Internship', 'Learn modern DevOps practices including CI/CD, containerization, and cloud infrastructure management.', 299.99, 12),
('Full-Stack Cloud Deployment', 'Master deploying full-stack applications on major cloud platforms with best practices and security considerations.', 349.99, 16),
('Full-Stack Development', 'Comprehensive training in modern full-stack development including frontend, backend, and database management.', 399.99, 24);