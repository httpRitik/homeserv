import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';
import { Search, MapPin, Star, Award, ChevronRight } from 'lucide-react-native';
import { COLORS, SPACING } from '@/constants/design';
import { CATEGORIES, POPULAR_SERVICES, RECOMMENDED_PROVIDERS } from '@/constants/mockData';
import CategoryCard from '@/components/home/CategoryCard';
import ServiceCard from '@/components/home/ServiceCard';
import ProviderCard from '@/components/home/ProviderCard';

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerGreeting}>Namaste</Text>
          <Text style={styles.headerName}>Ananya Singh</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg' }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* Location */}
      <TouchableOpacity style={styles.locationContainer}>
        <MapPin size={16} color={COLORS.primary} />
        <Text style={styles.locationText}>Koramangala, Bangalore</Text>
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Search size={20} color={COLORS.mediumText} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for services..."
          placeholderTextColor={COLORS.mediumText}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Service Categories */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {CATEGORIES.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onPress={() => {
                  // Handle category press
                }}
              />
            ))}
          </ScrollView>
        </View>

        {/* Popular Services */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Services</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <ChevronRight size={16} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={POPULAR_SERVICES}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.servicesContainer}
            renderItem={({ item }) => (
              <ServiceCard
                service={item}
                onPress={() => {
                  // Handle service press
                }}
              />
            )}
          />
        </View>

        {/* Top Rated Providers */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Rated Providers</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <ChevronRight size={16} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
          {RECOMMENDED_PROVIDERS.map((provider) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              onPress={() => {
                // Handle provider press
              }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl + 20,
    paddingBottom: SPACING.md,
  },
  headerGreeting: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
  },
  headerName: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
    marginTop: 4,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
  },
  locationText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: COLORS.primary,
    marginLeft: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SPACING.md,
    paddingHorizontal: SPACING.md,
    marginHorizontal: SPACING.lg,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  searchIcon: {
    marginRight: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: COLORS.darkText,
  },
  scrollContent: {
    paddingBottom: SPACING.xxl,
  },
  sectionContainer: {
    marginTop: SPACING.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: COLORS.primary,
  },
  categoriesContainer: {
    paddingHorizontal: SPACING.lg,
    gap: SPACING.md,
  },
  servicesContainer: {
    paddingHorizontal: SPACING.lg,
    gap: SPACING.md,
  },
});