import { useEffect } from 'react';
import { Button } from '@shared/components';
import { useCategoriesQuery } from '@entities/category/api';
import { useCurrentCategory } from '@entities/category/model';
import classes from './styles.module.scss';

export const CategorySwitch = () => {
  const { categories, getAllCategories } = useCategoriesQuery();
  const { currentCategory, switchCurrentCategory } = useCurrentCategory();

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className={classes.categorySwitchContainer}>
      <div className={classes.categorySwitchContent}>
        {categories.map((item) => (
          <Button
            key={item.id}
            mode={currentCategory === item.id ? 'active' : 'transparent'}
            customClassNames={classes.categorySwitchButton}
            onClick={() => switchCurrentCategory(item.id)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
