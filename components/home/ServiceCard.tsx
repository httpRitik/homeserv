import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { COLORS, SPACING } from '@/constants/design';
import { Star } from 'lucide-react-native';

type ServiceProps = {
  service: {
    id: string;
    name: string;
    price: number;
    duration: string;
    image: string;
    rating: number;
    reviewCount: number;
  };
  onPress: () => void;
};

export default function ServiceCard({ service, onPress }: ServiceProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: service.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{service.name}</Text>
        <Text style={styles.price}>₹{service.price} · {service.duration}</Text>
        
        <View style={styles.ratingContainer}>
          <Star size={14} color="#EAB308" fill="#EAB308" />
          <Text style={styles.rating}>
            {service.rating} ({service.reviewCount})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    borderRadius: SPACING.md,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
    shadowColor: COLORS.darkText,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
  },
  contentContainer: {
    padding: SPACING.md,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: COLORS.darkText,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
    marginLeft: 4,
  },
});