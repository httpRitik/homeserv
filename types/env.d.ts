declare module '@env' {
  export const SUPABASE_URL: string;
  export const SUPABASE_ANON_KEY: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_SUPABASE_URL: string;
      EXPO_PUBLIC_SUPABASE_ANON_KEY: string;
    }
  }
}

export {};