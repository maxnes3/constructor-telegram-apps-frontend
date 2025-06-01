import { UserType } from '@/shared/types';
import { create } from 'zustand';

interface AuthState {
  account: UserType | null;
  setAccount: (account: UserType | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  account: null,
  setAccount: (account: UserType | null) =>
    set(() => ({
      account,
    })),
}));
