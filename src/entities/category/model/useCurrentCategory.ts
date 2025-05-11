import { useCategoriesStore } from '../store';

export const useCurrentCategory = () => {
  const { currentCategory, setCurrentCategory } = useCategoriesStore();

  const switchCurrentCategory = (newCategory: typeof currentCategory) => {
    setCurrentCategory(newCategory);
  };

  return { currentCategory, switchCurrentCategory };
};
