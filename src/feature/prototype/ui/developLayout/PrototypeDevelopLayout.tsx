import { useProjectMode } from '@entities/project';
import { PrototypeLayoutSlot } from '@feature/prototype';
import { memo, useCallback } from 'react';
import { POSITION_BEHAVIOUR_STACK } from '@feature/prototype/model';
import { useScreensAtProject } from '@/entities/screen';
import { ProjectModeEnum } from '@/shared/types';
import classes from './styles.module.scss';

const PrototypeDevelopLayout = () => {
  const { projectMode } = useProjectMode();
  const { currentScreen } = useScreensAtProject();

  const templatesAtPrototype = currentScreen.templatesAtScreen;

  const handelFilterTemplates = useCallback(
    (positionBehaviour: string) => templatesAtPrototype[positionBehaviour],
    [templatesAtPrototype],
  );

  if (projectMode !== ProjectModeEnum.DEVELOP) return null;

  return (
    <div className={classes.prototypeDevelopLayout}>
      {POSITION_BEHAVIOUR_STACK.map((positionBehaviour) => (
        <PrototypeLayoutSlot
          key={positionBehaviour}
          slotPositionBehaviour={positionBehaviour}
          templates={handelFilterTemplates(positionBehaviour)}
        />
      ))}
    </div>
  );
};

export default memo(PrototypeDevelopLayout);
