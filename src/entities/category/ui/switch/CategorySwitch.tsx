import { useEffect } from 'react';
import { Button } from '@shared/components';
import { useCategoriesQuery } from '@entities/category/api';
import { useCurrentCategory } from '@entities/category/model';
import classes from './styles.module.scss';

export const CategorySwitch = () => {
  const { categories, getAllCategories } = useCategoriesQuery();
  const { currentCategory, switchCurrentCategory } = useCurrentCategory();

  const handleCategoryClick = (newCategory: string | null) => {
    switchCurrentCategory(newCategory);
  };

  useEffect(() => {
    getAllCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.categorySwitchContainer}>
      <div className={classes.categorySwitchContent}>
        {categories.map((item) => (
          <Button
            key={item.id}
            mode={currentCategory === item.id ? 'active' : 'transparent'}
            customClassNames={classes.categorySwitchButton}
            onClick={() => handleCategoryClick(item.id)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
