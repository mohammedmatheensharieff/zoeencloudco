import { create } from 'zustand';

interface User {
  _id: string;
  email: string;
  userType: 'admin' | 'user';
}

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, userType: 'admin' | 'user') => Promise<void>;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  signIn: async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const { user, token } = await response.json();
      localStorage.setItem('token', token);
      set({ user });
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },
  signUp: async (email, password, userType) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, userType }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const { user, token } = await response.json();
      localStorage.setItem('token', token);
      set({ user });
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  },
  signOut: () => {
    localStorage.removeItem('token');
    set({ user: null });
  },
}));