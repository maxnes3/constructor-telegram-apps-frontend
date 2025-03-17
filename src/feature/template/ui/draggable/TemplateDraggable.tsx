import { FC, useState } from 'react';
import Draggable, { DraggableEvent } from 'react-draggable';
import { TemplateType } from '@shared/types';
import { getIsInsidePrototype } from '@feature/template/model';
import { usePrototypeAreaBehavior } from '@entities/prototype';
import { TemplateRenderer, useTemplatesAtPrototype } from '@entities/template';
import { useProjectMode } from '@entities/project';
import classes from './styles.module.scss';

type TemplateDraggableProps = {
  template: TemplateType;
};

export const TemplateDraggable: FC<TemplateDraggableProps> = ({ template }) => {
  const { name, demo, positionBehaviour } = template;
  const [templatePosition, setTemplatePosition] = useState({ x: 0, y: 0 });
  const { switchIsOverPrototype, changePositionBehaviour } =
    usePrototypeAreaBehavior();
  const { addTemplateAtPrototype } = useTemplatesAtPrototype();
  const { switchProjectMode } = useProjectMode();

  const handleOnDrag = (e: DraggableEvent) => {
    const isInside = getIsInsidePrototype(e.target);

    switchProjectMode('develop');
    changePositionBehaviour(positionBehaviour);
    switchIsOverPrototype(isInside);
  };

  const handleOnStop = (e: DraggableEvent) => {
    const isInside = getIsInsidePrototype(e.target);

    if (isInside) {
      addTemplateAtPrototype(template);
    }

    switchIsOverPrototype(false);
    changePositionBehaviour(null);
    setTemplatePosition({ x: 0, y: 0 });
  };

  return (
    <Draggable
      position={templatePosition}
      onDrag={handleOnDrag}
      onStop={handleOnStop}
    >
      <div className={classes.templateDemoContainer}>
        <TemplateRenderer buildTemplate={demo} />
        <span className={classes.templateDemoTitle}>{name}</span>
      </div>
    </Draggable>
  );
};
