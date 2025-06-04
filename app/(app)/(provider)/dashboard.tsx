import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar, Bookmark, DollarSign, Star, ChevronRight, Clock } from 'lucide-react-native';
import { COLORS, SPACING } from '@/constants/design';
import { PROVIDER_BOOKINGS, PROVIDER_STATS } from '@/constants/mockData';
import BookingCard from '@/components/bookings/BookingCard';

export default function ProviderDashboardScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome back,</Text>
        <Text style={styles.headerTitle}>Sarah Johnson</Text>
      </View>

      {/* Stats Overview */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <View style={[styles.statIconContainer, { backgroundColor: 'rgba(29, 78, 216, 0.1)' }]}>
            <DollarSign size={20} color={COLORS.primary} />
          </View>
          <Text style={styles.statValue}>${PROVIDER_STATS.earnings}</Text>
          <Text style={styles.statLabel}>Earnings</Text>
        </View>

        <View style={styles.statCard}>
          <View style={[styles.statIconContainer, { backgroundColor: 'rgba(236, 72, 153, 0.1)' }]}>
            <Bookmark size={20} color="#EC4899" />
          </View>
          <Text style={styles.statValue}>{PROVIDER_STATS.completedJobs}</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>

        <View style={styles.statCard}>
          <View style={[styles.statIconContainer, { backgroundColor: 'rgba(234, 179, 8, 0.1)' }]}>
            <Star size={20} color="#EAB308" />
          </View>
          <Text style={styles.statValue}>{PROVIDER_STATS.rating}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>

      {/* Today's Schedule */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today's Schedule</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View Calendar</Text>
            <ChevronRight size={16} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.scheduleContainer}>
          {PROVIDER_BOOKINGS.filter(booking => booking.status === 'upcoming').slice(0, 2).map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              isProvider={true}
              onPress={() => {
                // Handle booking press
              }}
            />
          ))}
          
          {PROVIDER_BOOKINGS.filter(booking => booking.status === 'upcoming').length === 0 && (
            <View style={styles.emptySchedule}>
              <Clock size={40} color={COLORS.mediumText} style={{ opacity: 0.5 }} />
              <Text style={styles.emptyScheduleText}>No bookings for today</Text>
            </View>
          )}
        </View>
      </View>

      {/* Performance Overview */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Performance Overview</Text>
        <View style={styles.performanceCard}>
          <View style={styles.performanceItem}>
            <Text style={styles.performanceLabel}>Response Rate</Text>
            <Text style={styles.performanceValue}>98%</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '98%', backgroundColor: COLORS.success }]} />
            </View>
          </View>

          <View style={styles.performanceItem}>
            <Text style={styles.performanceLabel}>On-time Arrival</Text>
            <Text style={styles.performanceValue}>95%</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '95%', backgroundColor: COLORS.success }]} />
            </View>
          </View>

          <View style={styles.performanceItem}>
            <Text style={styles.performanceLabel}>Job Completion</Text>
            <Text style={styles.performanceValue}>100%</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '100%', backgroundColor: COLORS.success }]} />
            </View>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Calendar size={24} color={COLORS.white} />
            <Text style={styles.actionButtonText}>Update Availability</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#EC4899' }]}>
            <DollarSign size={24} color={COLORS.white} />
            <Text style={styles.actionButtonText}>Update Pricing</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    paddingBottom: SPACING.xxl,
  },
  header: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl + 20,
    paddingBottom: SPACING.lg,
  },
  greeting: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.sm,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: SPACING.md,
    padding: SPACING.md,
    marginHorizontal: 4,
    alignItems: 'center',
    shadowColor: COLORS.darkText,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.xs,
  },
  statValue: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
    marginTop: 2,
  },
  sectionContainer: {
    marginTop: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
    marginBottom: SPACING.sm,
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
  scheduleContainer: {
    gap: SPACING.md,
  },
  emptySchedule: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.md,
    padding: SPACING.xl,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.darkText,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  emptyScheduleText: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: COLORS.mediumText,
    marginTop: SPACING.md,
  },
  performanceCard: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.md,
    padding: SPACING.md,
    shadowColor: COLORS.darkText,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  performanceItem: {
    marginBottom: SPACING.md,
  },
  performanceLabel: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: COLORS.darkText,
  },
  performanceValue: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
    marginVertical: 4,
  },
  progressBar: {
    height: 6,
    backgroundColor: COLORS.lightGray,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.md,
  },
  actionButton: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: SPACING.md,
    padding: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  actionButtonText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: COLORS.white,
  },
});