import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Star, CreditCard, Bell, CircleHelp as HelpCircle, LogOut, ChevronRight, MapPin, Phone, Mail } from 'lucide-react-native';
import { COLORS, SPACING } from '@/constants/design';

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/(auth)/welcome');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg' }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Phone size={20} color={COLORS.primary} />
            <Text style={styles.infoText}>+1 (555) 123-4567</Text>
          </View>
          <View style={styles.infoItem}>
            <Mail size={20} color={COLORS.primary} />
            <Text style={styles.infoText}>john.doe@example.com</Text>
          </View>
          <View style={styles.infoItem}>
            <MapPin size={20} color={COLORS.primary} />
            <Text style={styles.infoText}>San Francisco, CA</Text>
          </View>
        </View>
      </View>

      {/* Settings Menu */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <CreditCard size={20} color={COLORS.mediumText} />
            </View>
            <Text style={styles.menuText}>Payment Methods</Text>
            <ChevronRight size={20} color={COLORS.mediumText} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Bell size={20} color={COLORS.mediumText} />
            </View>
            <Text style={styles.menuText}>Notifications</Text>
            <ChevronRight size={20} color={COLORS.mediumText} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Star size={20} color={COLORS.mediumText} />
            </View>
            <Text style={styles.menuText}>My Reviews</Text>
            <ChevronRight size={20} color={COLORS.mediumText} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <HelpCircle size={20} color={COLORS.mediumText} />
            </View>
            <Text style={styles.menuText}>Help & Support</Text>
            <ChevronRight size={20} color={COLORS.mediumText} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={20} color={COLORS.error} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* App Version */}
      <Text style={styles.versionText}>Version 1.0.0</Text>
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
    backgroundColor: COLORS.white,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: SPACING.lg,
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.lg,
    borderRadius: SPACING.md,
    shadowColor: COLORS.darkText,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: SPACING.md,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
    marginBottom: SPACING.sm,
  },
  editButton: {
    alignSelf: 'flex-start',
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    backgroundColor: COLORS.lightGray,
    borderRadius: SPACING.sm,
  },
  editButtonText: {
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
    color: COLORS.darkText,
  },
  sectionContainer: {
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.xl,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
    marginBottom: SPACING.md,
  },
  infoContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.md,
    padding: SPACING.md,
    shadowColor: COLORS.darkText,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
  },
  infoText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: COLORS.darkText,
    marginLeft: SPACING.md,
  },
  menuContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SPACING.md,
    shadowColor: COLORS.darkText,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  menuIconContainer: {
    width: 40,
    alignItems: 'center',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: COLORS.darkText,
    marginLeft: SPACING.sm,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.xl,
    padding: SPACING.md,
    backgroundColor: COLORS.white,
    borderRadius: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.error,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: COLORS.error,
    marginLeft: SPACING.sm,
  },
  versionText: {
    textAlign: 'center',
    marginTop: SPACING.xl,
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
  },
});