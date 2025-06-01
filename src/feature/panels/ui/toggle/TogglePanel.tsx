import { Button } from '@shared/components';
import { ArrowIcon } from '@shared/assets/icons';
import { usePrototypeLayout } from '@/entities/prototype';
import { useTemplatesList } from '@/entities/template';
import { useCategoriesQuery, useCurrentCategory } from '@/entities/category';
import cn from 'classnames';
import classes from './styles.module.scss';

export const TogglePanel = () => {
  const { showTemplatesOnPanel, switchShowTemplatesOnPanel } =
    useTemplatesList();
  const { currentCategory, switchCurrentCategory } = useCurrentCategory();
  const { categories } = useCategoriesQuery();
  const { isScaledPrototype, switchIsScaledPrototype } = usePrototypeLayout();

  const handleTogglePanel = () => {
    if (!categories) {
      return;
    }

    if (!currentCategory) {
      switchCurrentCategory(categories[0].id);
    }

    switchShowTemplatesOnPanel(!showTemplatesOnPanel);
    switchIsScaledPrototype(!isScaledPrototype);
  };

  const arrowIconClassNames = cn(classes.toggleArrowIcon, {
    [classes.showTemplates]: showTemplatesOnPanel,
  });

  return (
    <div className={classes.toggleButtonContainer}>
      <div className={classes.toggleButtonContent}>
        <Button
          mode={'active'}
          customClassNames={classes.toggleButton}
          onClick={handleTogglePanel}
        >
          <ArrowIcon className={arrowIconClassNames} />
        </Button>
      </div>
    </div>
  );
};
