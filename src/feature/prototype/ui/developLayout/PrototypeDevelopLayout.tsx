import { useProjectMode } from '@entities/project';
import { useTemplatesAtPrototype } from '@entities/template';
import { PrototypeLayoutSlot } from '@feature/prototype';
import { memo, useCallback } from 'react';
import { POSITION_BEHAVIOUR_STACK } from '@feature/prototype/model';
import classes from './styles.module.scss';

const PrototypeDevelopLayout = () => {
  const { projectMode } = useProjectMode();
  const { templatesAtPrototype } = useTemplatesAtPrototype();

  const handelFilterTemplates = useCallback(
    (positionBehaviour: string) => templatesAtPrototype[positionBehaviour],
    [templatesAtPrototype],
  );

  return (
    projectMode === 'develop' && (
      <div className={classes.prototypeDevelopLayout}>
        {POSITION_BEHAVIOUR_STACK.map((positionBehaviour) => (
          <PrototypeLayoutSlot
            key={positionBehaviour}
            slotPositionBehaviour={positionBehaviour}
            templates={handelFilterTemplates(positionBehaviour)}
          />
        ))}
      </div>
    )
  );
};

export default memo(PrototypeDevelopLayout);
