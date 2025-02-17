import axios from 'axios';
import { CategoryType } from '../types';

const CATEGORY_BASE_URL = `${import.meta.env.VITE_BACK_URL}/category`;

export const CategoryService = {
  getAllCategoriesQueryFn: async (): Promise<CategoryType[]> => {
    try {
      const response = await axios.get<CategoryType[]>(
        `${CATEGORY_BASE_URL}/get`,
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch categories: ${error}`);
    }
  },
};
