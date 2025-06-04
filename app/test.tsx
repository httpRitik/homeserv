import React from 'react';
import { Stack } from 'expo-router';
import TestConnection from './test-connection';

export default function TestScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Supabase Test',
          headerShown: true,
        }}
      />
      <TestConnection />
    </>
  );
} 