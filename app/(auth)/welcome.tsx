import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight } from 'lucide-react-native';
import { COLORS, SPACING } from '@/constants/design';

const { width } = Dimensions.get('window');

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      {/* Background Image with Gradient Overlay */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg' }}
          style={styles.backgroundImage}
        />
        <LinearGradient
          colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.6)']}
          style={styles.gradient}
        />
      </View>

      {/* App Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>HomeServ</Text>
        <Text style={styles.tagline}>Expert services at your doorstep</Text>
      </View>

      {/* Bottom Content */}
      <View style={styles.bottomContent}>
        <Text style={styles.welcomeTitle}>Welcome to HomeServ</Text>
        <Text style={styles.welcomeText}>
          Find trusted professionals for all your home service needs in your city
        </Text>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          <Link href="/(auth)/login" asChild>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/(auth)/register" asChild>
            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Register</Text>
              <ArrowRight size={20} color={COLORS.white} />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    height: '65%',
    width: '100%',
    position: 'absolute',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  gradient: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  logoContainer: {
    marginTop: 60,
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
  },
  logoText: {
    color: COLORS.white,
    fontSize: 32,
    fontFamily: 'Inter_700Bold',
    letterSpacing: 1,
  },
  tagline: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    marginTop: SPACING.xs,
    opacity: 0.9,
  },
  bottomContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.xxl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  welcomeTitle: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
    marginBottom: SPACING.sm,
  },
  welcomeText: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
    lineHeight: 24,
    marginBottom: SPACING.xl,
  },
  buttonsContainer: {
    gap: SPACING.md,
  },
  loginButton: {
    paddingVertical: SPACING.md,
    borderRadius: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray,
  },
  loginButtonText: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: COLORS.darkText,
  },
  registerButton: {
    flexDirection: 'row',
    paddingVertical: SPACING.md,
    borderRadius: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    gap: SPACING.sm,
  },
  registerButtonText: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: COLORS.white,
  },
});