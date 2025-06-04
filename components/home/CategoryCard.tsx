import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { COLORS, SPACING } from '@/constants/design';
import { useRouter } from 'expo-router';

type CategoryProps = {
  category: {
    id: string;
    name: string;
    color: string;
    image: string;
  };
  onPress: () => void;
};

export default function CategoryCard({ category, onPress }: CategoryProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: category.image }} style={styles.image} />
        <View style={[styles.overlay, { backgroundColor: category.color + '40' }]} />
      </View>
      <Text style={styles.name}>{category.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 80,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    marginBottom: SPACING.xs,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: COLORS.darkText,
    textAlign: 'center',
  },
});