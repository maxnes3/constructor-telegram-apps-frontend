import { FC } from 'react';
import { TemplateType } from '@/shared/types';
import { usePrototypeAreaBehavior } from '@entities/prototype';
import { PrototypeLayoutTemplate } from '../layoutTemplate';
import classes from './styles.module.scss';
import cn from 'classnames';

type PrototypeLayoutSlotProps = {
  slotPositionBehaviour: string;
  templates: TemplateType[];
  customClassNames?: string;
};

export const PrototypeLayoutSlot: FC<PrototypeLayoutSlotProps> = ({
  slotPositionBehaviour,
  templates,
  customClassNames,
}) => {
  const { isOverPrototype, positionBehaviour } = usePrototypeAreaBehavior();

  const prototypeLayoutSlotClassNames = cn(
    classes.prototypeLayoutSlot,
    classes[slotPositionBehaviour],
    {
      [classes.isActive]:
        isOverPrototype && slotPositionBehaviour === positionBehaviour,
    },
    customClassNames,
  );

  const renderTemplatesAtSlot =
    templates.length > 0
      ? templates.map((template) => (
          <PrototypeLayoutTemplate key={template.id} template={template} />
        ))
      : null;

  return (
    <div className={prototypeLayoutSlotClassNames}>
      {renderTemplatesAtSlot ?? (
        <span className={classes.emptyText}>Empty</span>
      )}
    </div>
  );
};
