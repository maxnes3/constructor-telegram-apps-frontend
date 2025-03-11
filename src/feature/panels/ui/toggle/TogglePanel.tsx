import { Button } from '@shared/components';
import { ArrowIcon } from '@shared/assets/icons';
import { usePrototypeLayout } from '@/entities/prototype';
import { useTemplatesListBehavior } from '@/entities/template';
import cn from 'classnames';
import classes from './styles.module.scss';

export const TogglePanel = () => {
  const { showTemplatesOnPanel, switchShowTemplatesOnPanel } =
    useTemplatesListBehavior();

  const { isScaledPrototype, switchIsScaledPrototype } = usePrototypeLayout();

  const handleTogglePanel = () => {
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
          mode={'default'}
          customClassNames={classes.toggleButton}
          onClick={handleTogglePanel}
        >
          <ArrowIcon className={arrowIconClassNames} />
        </Button>
      </div>
    </div>
  );
};
