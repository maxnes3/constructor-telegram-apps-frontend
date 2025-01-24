import { Button } from '@shared/components';
import { useConstructorStore } from '@entities/constructor';
import { usePanelWithTemplatesStore } from '../model';
import ARROW from '@shared/assets/icons/arrow.svg';
import classes from './toggle.module.scss';

export const ToggleButton = () => {
  const showTemplates = usePanelWithTemplatesStore(
    (state) => state.showTemplates,
  );
  const setShowTemplates = usePanelWithTemplatesStore(
    (state) => state.setShowTemplates,
  );
  const isScaledPrototype = useConstructorStore(
    (state) => state.isScaledPrototype,
  );
  const setIsScaledPrototype = useConstructorStore(
    (state) => state.setIsScaledPrototype,
  );

  const handleTogglePanel = () => {
    setShowTemplates(!showTemplates);
    setIsScaledPrototype(!isScaledPrototype);
  };

  return (
    <div className={classes.toggleButtonContainer}>
      <div className={classes.toggleButtonContent}>
        <Button
          mode={'default'}
          customClassNames={classes.toggleButton}
          onClick={handleTogglePanel}
        >
          <ARROW
            className={`${classes.toggleArrowIcon} ${showTemplates ? classes.showTemplates : ''}`}
          />
        </Button>
      </div>
    </div>
  );
};
