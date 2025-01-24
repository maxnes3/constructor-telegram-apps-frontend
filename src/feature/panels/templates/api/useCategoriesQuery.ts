import { useState } from 'react';
import { useCategoriesStore } from '../model';
import { CategoryType } from '@shared/types';
import axios from 'axios';

const CATEGORY_BASE_URL = `${import.meta.env.VITE_BACK_URL}/category`;

const getAllCategoriesQueryFn = async (): Promise<CategoryType[]> => {
  try {
    const response = await axios.get<CategoryType[]>(
      `${CATEGORY_BASE_URL}/get`,
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch categories: ${error}`);
  }
};

export const useCategoriesQuery = () => {
  const { categories, setCategories } = useCategoriesStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleGetAllCategories = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await getAllCategoriesQueryFn();
      setCategories(response);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    categories,
    isLoading,
    error,
    handleGetAllCategories,
  };
};
