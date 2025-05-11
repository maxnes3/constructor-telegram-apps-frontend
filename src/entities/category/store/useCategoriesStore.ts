import { CategoryType } from '@/shared/types';
import { create } from 'zustand';

interface CategoriesState {
  categories: CategoryType[];
  currentCategory: string | null;
  setCategories: (categories: CategoryType[]) => void;
  setCurrentCategory: (newValue: string | null) => void;
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: [],
  currentCategory: null,
  setCategories: (categories: CategoryType[]) =>
    set(() => ({
      categories,
    })),
  setCurrentCategory: (newValue: string | null) =>
    set(() => ({
      currentCategory: newValue,
    })),
}));
