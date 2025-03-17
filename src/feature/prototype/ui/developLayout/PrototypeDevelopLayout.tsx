import { useProjectMode } from '@entities/project';
import { useTemplatesAtPrototype } from '@entities/template';
import { PrototypeLayoutSlot } from '@feature/prototype';
import classes from './styles.module.scss';

export const PrototypeDevelopLayout = () => {
  const { projectMode } = useProjectMode();
  const { templatesAtPrototype } = useTemplatesAtPrototype();

  const handelFilterTemplates = (positionBehaviour: string) =>
    templatesAtPrototype.filter(
      (template) => template.positionBehaviour == positionBehaviour,
    );

  return (
    projectMode === 'develop' && (
      <div className={classes.prototypeDevelopLayout}>
        <PrototypeLayoutSlot
          slotPositionBehaviour={'isTop'}
          templates={handelFilterTemplates('isTop')}
        />
        <PrototypeLayoutSlot
          slotPositionBehaviour={'isFill'}
          templates={handelFilterTemplates('isFill')}
        />
        <PrototypeLayoutSlot
          slotPositionBehaviour={'isBottom'}
          templates={handelFilterTemplates('isBottom')}
        />
      </div>
    )
  );
};
