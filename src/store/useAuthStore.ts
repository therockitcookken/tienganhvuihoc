import { create } from 'zustand';
import { mockUsers } from '../data/mockData';
import type { User } from '../data/mockData';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  login: (email: string) => {
    set({ isLoading: true });
    // Simulate API call
    setTimeout(() => {
      const foundUser = mockUsers.find(u => u.email === email);
      if (foundUser) {
        set({ user: foundUser, isAuthenticated: true, isLoading: false });
      } else {
        // Mock fallback to a student user
        set({ user: mockUsers[4], isAuthenticated: true, isLoading: false });
      }
    }, 500);
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));
