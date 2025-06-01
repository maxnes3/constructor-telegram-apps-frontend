import { AuthRequestType } from '@shared/types';
import { serviceConfig } from '../configs';

const BASE_URL = '/auth';

export const AuthService = {
  signInQueryFn: async (data: AuthRequestType) => {
    try {
      const response = await serviceConfig.post(`${BASE_URL}/signin`, data);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to sign in: ${error}`);
    }
  },
  signUpQueryFn: async (data: AuthRequestType) => {
    try {
      const response = await serviceConfig.post(`${BASE_URL}/signup`, data);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to sign up: ${error}`);
    }
  },
  refreshTokensQueryFn: async () => {
    try {
      const response = await serviceConfig.post(
        `${BASE_URL}/signin/access-token`,
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to refresh tokens: ${error}`);
    }
  },
};
