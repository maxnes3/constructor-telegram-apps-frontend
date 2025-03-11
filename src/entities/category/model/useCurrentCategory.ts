import { useCategoriesStore } from '../store';

export const useCurrentCategory = () => {
  const { currentCategory, setCurrentCategory } = useCategoriesStore();

  const switchCurrentCategory = (newCategory: string) => {
    setCurrentCategory(newCategory);
  };

  return { currentCategory, switchCurrentCategory };
};
