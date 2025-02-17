import { FC, useState } from 'react';
import Draggable, { DraggableEvent } from 'react-draggable';
import { TemplateType } from '@shared/types';
import { Renderer } from '@shared/components';
import { getIsInsidePrototype } from '../model';
import { usePrototypeAreaBehavior } from '@entities/prototype';
import { useTemplatesAtPrototype } from '@/entities/template';
import classes from './styles.module.scss';

type TemplateDemoProps = {
  template: TemplateType;
};

export const TemplateDemo: FC<TemplateDemoProps> = ({ template }) => {
  const { name, demo, positionBehaviour } = template;
  const [templatePosition, setTemplatePosition] = useState({ x: 0, y: 0 });
  const { handleSetIsOverPrototype, handleSetPositionBehaviour } =
    usePrototypeAreaBehavior();
  const { handleAddTemplateAtPrototype } = useTemplatesAtPrototype();

  const handleOnDrag = (e: DraggableEvent) => {
    const isInside = getIsInsidePrototype(e.target);

    handleSetPositionBehaviour(positionBehaviour);
    handleSetIsOverPrototype(isInside);
  };

  const handleOnStop = (e: DraggableEvent) => {
    const isInside = getIsInsidePrototype(e.target);

    if (isInside) {
      handleAddTemplateAtPrototype(template);
    }

    handleSetIsOverPrototype(false);
    handleSetPositionBehaviour(null);
    setTemplatePosition({ x: 0, y: 0 });
  };

  return (
    <Draggable
      position={templatePosition}
      onDrag={handleOnDrag}
      onStop={handleOnStop}
    >
      <div className={classes.templateDemoContainer}>
        <Renderer html={demo.html} css={demo.css} />
        <span className={classes.templateDemoTitle}>{name}</span>
      </div>
    </Draggable>
  );
};
