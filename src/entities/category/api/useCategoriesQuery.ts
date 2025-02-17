import { useState } from 'react';
import { CategoryService } from '@shared/api';
import { useCategoriesStore } from '../store';
import { createHandleQueryFn } from '@shared/utils';

export const useCategoriesQuery = () => {
  const { categories, setCategories } = useCategoriesStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleGetAllCategories = createHandleQueryFn({
    queryFn: CategoryService.getAllCategoriesQueryFn,
    setData: setCategories,
    setIsLoading,
    setError,
  });

  return {
    categories,
    isLoading,
    error,
    handleGetAllCategories,
  };
};
