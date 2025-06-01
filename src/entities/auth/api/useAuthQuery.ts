import { useState } from 'react';
import { useAuthStore } from '../store';
import { AuthRequestType } from '@/shared/types';
import { AuthService } from '@/shared/api';

export const useAuthQuery = () => {
  const { account, setAccount } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const isAuthenticated = account !== null;

  const signIn = async (data: AuthRequestType) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await AuthService.signInQueryFn(data);
      setAccount(response);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (data: AuthRequestType) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await AuthService.signUpQueryFn(data);
      setAccount(response);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    account,
    isAuthenticated,
    signIn,
    signUp,
    isLoading,
    error,
  };
};
