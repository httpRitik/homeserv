import { Platform } from 'react-native';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function AppLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
        }}
      >
        <Stack.Screen name="(customer)" />
        <Stack.Screen name="(provider)" />
      </Stack>
    </GestureHandlerRootView>
  );
}