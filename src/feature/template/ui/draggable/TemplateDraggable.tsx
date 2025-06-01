import { FC, useState } from 'react';
import Draggable, { DraggableEvent } from 'react-draggable';
import { ProjectModeEnum, TemplateType } from '@shared/types';
import { getIsInsidePrototype } from '@feature/template/model';
import { usePrototypeAreaBehavior } from '@entities/prototype';
import { TemplateRenderer } from '@entities/template';
import { useProjectMode } from '@entities/project';
import { useScreensAtProject } from '@/entities/screen';
import { TemplatePickButton } from '../pickButton';
import classes from './styles.module.scss';
import cn from 'classnames';

type Props = {
  template: TemplateType;
  prev: string | null;
  next: string | null;
  isActive: boolean;
  onChangeCurrentTemplate: (templateId: string) => void;
};

export const TemplateDraggable: FC<Props> = ({
  template,
  prev,
  next,
  isActive,
  onChangeCurrentTemplate,
}) => {
  const { id, name, develop, positionBehaviour } = template;
  const [templatePosition, setTemplatePosition] = useState({ x: 0, y: 0 });
  const [isOnDrag, setIsOnDrag] = useState(false);
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
    setIsOnDrag(true);
  };

  const handleOnStop = (e: DraggableEvent) => {
    const isInside = getIsInsidePrototype(e.target);

    if (isInside && !isAlreadyUsing) {
      addTemplateAtScreen(template);
    }

    switchIsOverPrototype(false);
    changePositionBehaviour(null);
    setTemplatePosition({ x: 0, y: 0 });
    setIsOnDrag(false);
  };

  const handlePickPrevius = () => {
    if (!prev) return;
    onChangeCurrentTemplate(prev);
  };

  const handlePickNext = () => {
    if (!next) return;
    onChangeCurrentTemplate(next);
  };

  const handleClick = () => {
    onChangeCurrentTemplate(template.id);
  };

  const templateRendererClassNames = cn(
    classes.templateDraggableRenderer,
    classes[positionBehaviour],
  );

  if (!isActive) {
    return (
      <li
        className={cn(classes.templateDraggableContainer, classes.isNotActive)}
        onClick={handleClick}
      >
        <TemplateRenderer
          codebaseTemplate={develop}
          customClassNames={templateRendererClassNames}
        />
        <span className={classes.templateDraggableTitle}>{name}</span>
      </li>
    );
  }

  return (
    <div className={classes.templateItem}>
      {prev && !isOnDrag && (
        <TemplatePickButton iconType="prev" onClick={handlePickPrevius} />
      )}
      <Draggable
        position={templatePosition}
        onDrag={handleOnDrag}
        onStop={handleOnStop}
      >
        <li className={classes.templateDraggableContainer}>
          <TemplateRenderer
            codebaseTemplate={develop}
            customClassNames={templateRendererClassNames}
          />
          <span className={classes.templateDraggableTitle}>{name}</span>
        </li>
      </Draggable>
      {next && !isOnDrag && (
        <TemplatePickButton iconType="next" onClick={handlePickNext} />
      )}
    </div>
  );
};
