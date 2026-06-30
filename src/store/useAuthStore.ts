import { create } from 'zustand';
import { mockUsers } from '../data/mockData';
import type { User } from '../data/mockData';
import { auth, db } from '../lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  register: (email: string, pass: string, name: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,

  login: async (email, pass) => {
    set({ isLoading: true });
    try {
      const isDummy = import.meta.env.VITE_FIREBASE_API_KEY === 'dummy_api_key' || !import.meta.env.VITE_FIREBASE_API_KEY;
      
      if (auth && db && !isDummy) {
        const cred = await signInWithEmailAndPassword(auth, email, pass);
        const docRef = doc(db, 'users', cred.user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          set({ user: docSnap.data() as User, isLoading: false });
        } else {
          throw new Error('User data not found');
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
        const found = mockUsers.find(u => u.email === email);
        if (found) {
          set({ user: found, isLoading: false });
        } else {
          throw new Error('Sai tài khoản hoặc mật khẩu (Mock)');
        }
      }
    } catch (error: any) {
      set({ isLoading: false });
      throw error;
    }
  },

  register: async (email, pass, name) => {
    set({ isLoading: true });
    try {
      const isDummy = import.meta.env.VITE_FIREBASE_API_KEY === 'dummy_api_key' || !import.meta.env.VITE_FIREBASE_API_KEY;

      if (auth && db && !isDummy) {
        const cred = await createUserWithEmailAndPassword(auth, email, pass);
        const newUser: User = {
          uid: cred.user.uid,
          email,
          displayName: name,
          role: 'student',
          xp: 0,
          streak: 0,
          vipStatus: 'none',
        };
        await setDoc(doc(db, 'users', cred.user.uid), newUser);
        set({ user: newUser, isLoading: false });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
        set({
          user: {
            uid: Math.random().toString(),
            email,
            displayName: name,
            role: 'student',
            xp: 0,
            streak: 0,
            vipStatus: 'none',
          },
          isLoading: false
        });
      }
    } catch (error: any) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    if (auth) {
      await signOut(auth);
    }
    set({ user: null });
  },
}));
