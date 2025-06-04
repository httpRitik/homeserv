import React from 'react';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';

// Ignore specific warnings
LogBox.ignoreLogs([
  'Warning: Failed prop type',
  'Non-serializable values were found in the navigation state',
]);

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFrameworkReady();
  
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was encountered)
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or an error was encountered
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)" options={{ animation: 'fade' }} />
        <Stack.Screen name="(app)" options={{ animation: 'fade' }} />
        <Stack.Screen name="+not-found" options={{ presentation: 'modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}