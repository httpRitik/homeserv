import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { COLORS, SPACING } from '@/constants/design';
import { Star, Shield } from 'lucide-react-native';

type ProviderProps = {
  provider: {
    id: string;
    name: string;
    occupation: string;
    image: string;
    rating: number;
    reviewCount: number;
    verified: boolean;
    hourlyRate: number;
  };
  onPress: () => void;
};

export default function ProviderCard({ provider, onPress }: ProviderProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: provider.image }} style={styles.image} />
      
      <View style={styles.contentContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{provider.name}</Text>
          {provider.verified && (
            <View style={styles.verifiedBadge}>
              <Shield size={12} color={COLORS.white} />
            </View>
          )}
        </View>
        
        <Text style={styles.occupation}>{provider.occupation}</Text>
        
        <View style={styles.ratingContainer}>
          <Star size={14} color="#EAB308" fill="#EAB308" />
          <Text style={styles.rating}>
            {provider.rating} ({provider.reviewCount} reviews)
          </Text>
        </View>
      </View>
      
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹{provider.hourlyRate}</Text>
        <Text style={styles.perHour}>/hr</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: SPACING.md,
    backgroundColor: COLORS.white,
    marginBottom: SPACING.md,
    padding: SPACING.md,
    alignItems: 'center',
    shadowColor: COLORS.darkText,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  contentContainer: {
    flex: 1,
    marginLeft: SPACING.md,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: COLORS.darkText,
  },
  verifiedBadge: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SPACING.xs,
  },
  occupation: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
    marginTop: 2,
    marginBottom: 4,
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
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    color: COLORS.primary,
  },
  perHour: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
    marginLeft: 2,
  },
});