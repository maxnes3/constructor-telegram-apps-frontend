import { useEffect } from 'react';
import { Button } from '@shared/components';
import { useCategoriesQuery } from '../api';
import { usePanelWithTemplatesStore } from '../model';
import classes from './category.module.scss';

export const CategorySwitch = () => {
  const { categories, handleGetAllCategories } = useCategoriesQuery();
  const currentCategory = usePanelWithTemplatesStore(
    (state) => state.currentCategory,
  );
  const setCurrentCategory = usePanelWithTemplatesStore(
    (state) => state.setCurrentCategory,
  );

  const handleSwitchCategory = (newCategory: string) => {
    setCurrentCategory(newCategory);
  };

  useEffect(() => {
    handleGetAllCategories();
  }, []);

  return (
    <div className={classes.categorySwitchContainer}>
      <div className={classes.categorySwitchContent}>
        {categories.map((item) => (
          <Button
            key={item.id}
            mode={currentCategory === item.id ? 'active' : 'transparent'}
            customClassNames={classes.categorySwitchButton}
            onClick={() => handleSwitchCategory(item.id)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
