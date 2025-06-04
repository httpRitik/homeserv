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
          full_name: string
          phone: string | null
          avatar_url: string | null
          user_type: 'customer' | 'provider'
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          phone?: string | null
          avatar_url?: string | null
          user_type: 'customer' | 'provider'
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          phone?: string | null
          avatar_url?: string | null
          user_type?: 'customer' | 'provider'
          created_at?: string | null
          updated_at?: string | null
        }
      }
      service_categories: {
        Row: {
          id: string
          name: string
          icon: string
          color: string
          image_url: string
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          icon: string
          color: string
          image_url: string
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          icon?: string
          color?: string
          image_url?: string
          created_at?: string | null
        }
      }
      services: {
        Row: {
          id: string
          category_id: string | null
          provider_id: string | null
          name: string
          description: string | null
          price: number
          duration: string
          image_url: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          category_id?: string | null
          provider_id?: string | null
          name: string
          description?: string | null
          price: number
          duration: string
          image_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          category_id?: string | null
          provider_id?: string | null
          name?: string
          description?: string | null
          price?: number
          duration?: string
          image_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      bookings: {
        Row: {
          id: string
          service_id: string | null
          customer_id: string | null
          provider_id: string | null
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          scheduled_at: string
          duration: string
          price: number
          address: string
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          service_id?: string | null
          customer_id?: string | null
          provider_id?: string | null
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          scheduled_at: string
          duration: string
          price: number
          address: string
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          service_id?: string | null
          customer_id?: string | null
          provider_id?: string | null
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          scheduled_at?: string
          duration?: string
          price?: number
          address?: string
          created_at?: string | null
          updated_at?: string | null
        }
      }
      reviews: {
        Row: {
          id: string
          booking_id: string | null
          customer_id: string | null
          provider_id: string | null
          rating: number
          comment: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          booking_id?: string | null
          customer_id?: string | null
          provider_id?: string | null
          rating: number
          comment?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          booking_id?: string | null
          customer_id?: string | null
          provider_id?: string | null
          rating?: number
          comment?: string | null
          created_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}