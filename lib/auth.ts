import { supabase } from './supabase';

export type AuthError = {
  message: string;
};

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function signUp(
  email: string,
  password: string,
  fullName: string,
  phone: string,
  userType: 'customer' | 'provider'
) {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        phone,
        user_type: userType,
      },
    },
  });

  if (authError) {
    throw new Error(authError.message);
  }

  // Create user profile in the users table
  const { error: profileError } = await supabase.from('users').insert([
    {
      id: authData.user?.id,
      email,
      full_name: fullName,
      phone,
      user_type: userType,
    },
  ]);

  if (profileError) {
    throw new Error(profileError.message);
  }

  return authData;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}

export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error) {
    throw new Error(error.message);
  }
  
  return user;
}