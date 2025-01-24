import { CategoryType } from '@/shared/types';
import { create } from 'zustand';

interface CategoriesState {
  categories: CategoryType[];
  setCategories: (categories: CategoryType[]) => void;
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: [],
  setCategories: (categories: CategoryType[]) =>
    set(() => ({
      categories,
    })),
}));
