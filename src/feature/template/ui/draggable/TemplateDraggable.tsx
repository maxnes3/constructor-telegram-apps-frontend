import { FC, useState } from 'react';
import Draggable, { DraggableEvent } from 'react-draggable';
import { ProjectModeEnum, TemplateType } from '@shared/types';
import { getIsInsidePrototype } from '@feature/template/model';
import { usePrototypeAreaBehavior } from '@entities/prototype';
import { TemplateRenderer } from '@entities/template';
import { useProjectMode } from '@entities/project';
import { useScreensAtProject } from '@/entities/screen';
import classes from './styles.module.scss';
import cn from 'classnames';

type TemplateDraggableProps = {
  template: TemplateType;
};

export const TemplateDraggable: FC<TemplateDraggableProps> = ({ template }) => {
  const { id, name, demo, positionBehaviour } = template;
  const [templatePosition, setTemplatePosition] = useState({ x: 0, y: 0 });
  const { switchIsOverPrototype, changePositionBehaviour } =
    usePrototypeAreaBehavior();
  const { checkTemplateAtScreenById, addTemplateAtScreen } =
    useScreensAtProject();
  const { switchProjectMode } = useProjectMode();

  const isAlreadyUsing = checkTemplateAtScreenById(id);

  const handleOnDrag = (e: DraggableEvent) => {
    const isInside = getIsInsidePrototype(e.target);

    switchProjectMode(ProjectModeEnum.DEVELOP);
    changePositionBehaviour(positionBehaviour);
    switchIsOverPrototype(isInside);
  };

  const handleOnStop = (e: DraggableEvent) => {
    const isInside = getIsInsidePrototype(e.target);

    if (isInside && !isAlreadyUsing) {
      addTemplateAtScreen(template);
    }

    switchIsOverPrototype(false);
    changePositionBehaviour(null);
    setTemplatePosition({ x: 0, y: 0 });
  };

  const templateRendererClassNames = cn(
    classes.templateDraggableRenderer,
    classes[positionBehaviour],
  );

  return (
    <Draggable
      position={templatePosition}
      onDrag={handleOnDrag}
      onStop={handleOnStop}
    >
      <li className={classes.templateDraggableContainer}>
        <TemplateRenderer
          buildTemplate={demo}
          customClassNames={templateRendererClassNames}
        />
        <span className={classes.templateDraggableTitle}>{name}</span>
      </li>
    </Draggable>
  );
};
