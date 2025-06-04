import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { COLORS, SPACING } from '@/constants/design';
import { Calendar, Clock, MapPin } from 'lucide-react-native';

type BookingProps = {
  booking: {
    id: string;
    serviceId?: string;
    serviceName: string;
    providerId?: string;
    providerName?: string;
    providerImage?: string;
    customerId?: string;
    customerName?: string;
    customerImage?: string;
    date: string;
    time: string;
    duration: string;
    status: 'upcoming' | 'completed' | 'cancelled';
    price: number;
    address: string;
  };
  isProvider?: boolean;
  onPress: () => void;
};

export default function BookingCard({ booking, isProvider = false, onPress }: BookingProps) {
  // Format date
  const formattedDate = new Date(booking.date).toLocaleDateString('en-IN', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  // Status color
  const getStatusColor = () => {
    switch (booking.status) {
      case 'upcoming':
        return COLORS.primary;
      case 'completed':
        return COLORS.success;
      case 'cancelled':
        return COLORS.error;
      default:
        return COLORS.primary;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.serviceName}>{booking.serviceName}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
          <Text style={styles.statusText}>
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: isProvider
                ? booking.customerImage
                : booking.providerImage,
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileLabel}>
              {isProvider ? 'Customer' : 'Service Provider'}
            </Text>
            <Text style={styles.profileName}>
              {isProvider ? booking.customerName : booking.providerName}
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Calendar size={16} color={COLORS.mediumText} />
            <Text style={styles.infoText}>{formattedDate}</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Clock size={16} color={COLORS.mediumText} />
            <Text style={styles.infoText}>{booking.time} · {booking.duration}</Text>
          </View>
          
          <View style={styles.infoItem}>
            <MapPin size={16} color={COLORS.mediumText} />
            <Text style={styles.infoText} numberOfLines={1}>{booking.address}</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>₹{booking.price}</Text>
        {booking.status === 'upcoming' && (
          <TouchableOpacity
            style={[
              styles.actionButton,
              { backgroundColor: isProvider ? COLORS.primary : COLORS.white },
            ]}
          >
            <Text
              style={[
                styles.actionButtonText,
                { color: isProvider ? COLORS.white : COLORS.primary },
              ]}
            >
              {isProvider ? 'Accept' : 'Reschedule'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: SPACING.md,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
    shadowColor: COLORS.darkText,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  serviceName: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: SPACING.xs,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
    color: COLORS.white,
  },
  detailsContainer: {
    padding: SPACING.md,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    marginLeft: SPACING.md,
  },
  profileLabel: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
  },
  profileName: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: COLORS.darkText,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.md,
  },
  infoSection: {
    gap: SPACING.xs,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
    marginLeft: SPACING.sm,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.lightGray,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
  },
  actionButton: {
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
    borderRadius: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  actionButtonText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
  },
});