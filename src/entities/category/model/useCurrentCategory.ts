import { useCategoriesStore } from '../store';

export const useCurrentCategory = () => {
  const { currentCategory, setCurrentCategory } = useCategoriesStore();

  const handleSwitchCategory = (newCategory: string) => {
    setCurrentCategory(newCategory);
  };

  return { currentCategory, handleSwitchCategory };
};
