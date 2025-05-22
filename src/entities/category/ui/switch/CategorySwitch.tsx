import { useEffect } from 'react';
import { Button } from '@shared/components';
import { useCategoriesQuery } from '@entities/category/api';
import { useCurrentCategory } from '@entities/category/model';
import {
  DEFAULT_TEMPLATE_LIST_OFFSET,
  useTemplatesList,
} from '@/entities/template';
import classes from './styles.module.scss';

export const CategorySwitch = () => {
  const { categories, getAllCategories } = useCategoriesQuery();
  const { currentCategory, switchCurrentCategory } = useCurrentCategory();
  const { switchActiveTemplateOnPanel, changeTemplateListOffset } =
    useTemplatesList();

  const handleCategoryClick = (newCategory: string | null) => {
    switchActiveTemplateOnPanel(null);
    switchCurrentCategory(newCategory);
    changeTemplateListOffset(DEFAULT_TEMPLATE_LIST_OFFSET);
  };

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
            onClick={() => handleCategoryClick(item.id)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
