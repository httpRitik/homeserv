import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { supabase } from '@/lib/supabase';
import type { Database } from '@/types/supabase';

type ServiceCategory = Database['public']['Tables']['service_categories']['Row'];

export default function TestConnection() {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data, error } = await supabase
          .from('service_categories')
          .select('*');

        if (error) {
          throw error;
        }

        setCategories(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }
    }

    fetchCategories();
  }, []);

  if (error) {
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ color: 'red' }}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Service Categories:</Text>
      {categories.map((category) => (
        <View key={category.id} style={{ marginBottom: 10 }}>
          <Text>Name: {category.name}</Text>
          <Text>Icon: {category.icon}</Text>
        </View>
      ))}
    </View>
  );
} 