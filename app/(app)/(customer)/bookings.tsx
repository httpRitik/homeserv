import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '@/constants/design';
import { BOOKINGS } from '@/constants/mockData';
import BookingCard from '@/components/bookings/BookingCard';

type BookingStatus = 'upcoming' | 'completed' | 'cancelled';

export default function BookingsScreen() {
  const [activeTab, setActiveTab] = useState<BookingStatus>('upcoming');
  
  const filteredBookings = BOOKINGS.filter(booking => booking.status === activeTab);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Bookings</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {(['upcoming', 'completed', 'cancelled'] as BookingStatus[]).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText
              ]}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Booking List */}
      <FlatList
        data={filteredBookings}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.bookingsList}
        renderItem={({ item }) => (
          <BookingCard
            booking={item}
            onPress={() => {
              // Handle booking press
            }}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No {activeTab} bookings found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl + 20,
    paddingBottom: SPACING.lg,
    backgroundColor: COLORS.white,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.lg,
  },
  tab: {
    flex: 1,
    paddingVertical: SPACING.sm,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: COLORS.mediumText,
  },
  activeTabText: {
    color: COLORS.primary,
  },
  bookingsList: {
    padding: SPACING.lg,
    gap: SPACING.md,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.xxl,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: COLORS.mediumText,
  },
});