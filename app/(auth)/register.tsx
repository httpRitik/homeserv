import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { ArrowLeft, Mail, Lock, User, Phone } from 'lucide-react-native';
import { COLORS, SPACING } from '@/constants/design';
import { signUp } from '@/lib/auth';

export default function RegisterScreen() {
  const router = useRouter();
  const [userType, setUserType] = useState<'customer' | 'provider'>('customer');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!fullName || !email || !phone || !password) {
        throw new Error('Please fill in all fields');
      }

      await signUp(email, password, fullName, phone, userType);

      // Navigate to the appropriate screen
      if (userType === 'customer') {
        router.replace('/(app)/(customer)/home');
      } else {
        router.replace('/(app)/(provider)/dashboard');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <ArrowLeft size={24} color={COLORS.darkText} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Register</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.content}>
          {/* User Type Selection */}
          <View style={styles.userTypeContainer}>
            <TouchableOpacity
              style={[
                styles.userTypeButton,
                userType === 'customer' && styles.activeUserTypeButton,
              ]}
              onPress={() => setUserType('customer')}
            >
              <User size={18} color={userType === 'customer' ? COLORS.white : COLORS.mediumText} />
              <Text style={[
                styles.userTypeText,
                userType === 'customer' && styles.activeUserTypeText,
              ]}>
                Customer
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.userTypeButton,
                userType === 'provider' && styles.activeUserTypeButton,
              ]}
              onPress={() => setUserType('provider')}
            >
              <User size={18} color={userType === 'provider' ? COLORS.white : COLORS.mediumText} />
              <Text style={[
                styles.userTypeText,
                userType === 'provider' && styles.activeUserTypeText,
              ]}>
                Service Provider
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.registerTitle}>
            {userType === 'customer' 
              ? 'Create a customer account' 
              : 'Register as a service provider'}
          </Text>

          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          {/* Registration Form */}
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <User size={20} color={COLORS.mediumText} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
                editable={!loading}
              />
            </View>

            <View style={styles.inputContainer}>
              <Mail size={20} color={COLORS.mediumText} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={!loading}
              />
            </View>

            <View style={styles.inputContainer}>
              <Phone size={20} color={COLORS.mediumText} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                editable={!loading}
              />
            </View>

            <View style={styles.inputContainer}>
              <Lock size={20} color={COLORS.mediumText} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                editable={!loading}
              />
            </View>

            <Text style={styles.termsText}>
              By registering, you agree to our Terms of Service and Privacy Policy
            </Text>

            <TouchableOpacity 
              style={[styles.registerButton, loading && styles.registerButtonDisabled]}
              onPress={handleRegister}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color={COLORS.white} />
              ) : (
                <Text style={styles.registerButtonText}>Create Account</Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <Link href="/(auth)/login" asChild>
              <TouchableOpacity>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: SPACING.xxl,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.lg,
  },
  backButton: {
    padding: SPACING.xs,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Inter_500Medium',
    color: COLORS.darkText,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
  },
  userTypeContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray,
    borderRadius: SPACING.md,
    padding: SPACING.xs,
    marginBottom: SPACING.xl,
  },
  userTypeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.sm,
    borderRadius: SPACING.sm,
    gap: SPACING.xs,
  },
  activeUserTypeButton: {
    backgroundColor: COLORS.primary,
  },
  userTypeText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: COLORS.mediumText,
  },
  activeUserTypeText: {
    color: COLORS.white,
  },
  registerTitle: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
    marginBottom: SPACING.lg,
  },
  errorContainer: {
    backgroundColor: '#FEE2E2',
    padding: SPACING.md,
    borderRadius: SPACING.sm,
    marginBottom: SPACING.md,
  },
  errorText: {
    color: '#DC2626',
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
  },
  formContainer: {
    gap: SPACING.md,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SPACING.md,
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.md,
  },
  inputIcon: {
    marginRight: SPACING.sm,
  },
  input: {
    flex: 1,
    height: 56,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: COLORS.darkText,
  },
  termsText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: COLORS.mediumText,
    textAlign: 'center',
    marginTop: SPACING.sm,
  },
  registerButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SPACING.md,
    paddingVertical: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.md,
  },
  registerButtonDisabled: {
    opacity: 0.7,
  },
  registerButtonText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: COLORS.white,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SPACING.xl,
  },
  footerText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: COLORS.mediumText,
  },
  loginText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: COLORS.primary,
  },
});