import { FC, useEffect, useState } from 'react';
import Draggable, { DraggableEvent } from 'react-draggable';
import { ProjectModeEnum, TemplateType } from '@shared/types';
import { getIsInsidePrototype } from '@feature/template/model';
import { usePrototypeAreaBehavior } from '@entities/prototype';
import { TemplateRenderer, useTemplatesList } from '@entities/template';
import { useProjectMode } from '@entities/project';
import { useScreensAtProject } from '@/entities/screen';
import classes from './styles.module.scss';
import cn from 'classnames';
import { TemplatePickButton } from '../pickButton';

type TemplateDraggableProps = {
  template: TemplateType;
  prev: string | null;
  next: string | null;
  indexInTemplatesList: number;
};

export const TemplateDraggable: FC<TemplateDraggableProps> = ({
  template,
  prev,
  next,
  indexInTemplatesList,
}) => {
  const { id, name, develop, positionBehaviour } = template;
  const [templatePosition, setTemplatePosition] = useState({ x: 0, y: 0 });
  const [isOnDrag, setIsOnDrag] = useState(false);
  const { switchIsOverPrototype, changePositionBehaviour } =
    usePrototypeAreaBehavior();
  const { checkTemplateAtScreenById, addTemplateAtScreen } =
    useScreensAtProject();
  const { switchProjectMode } = useProjectMode();
  const {
    activeTemplateOnPanel,
    switchActiveTemplateOnPanel,
    changeTemplateListOffset,
  } = useTemplatesList();

  const isActive = activeTemplateOnPanel === id;
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
    switchActiveTemplateOnPanel(prev);
  };

  const handlePickNext = () => {
    switchActiveTemplateOnPanel(next);
  };

  const handleClick = () => {
    switchActiveTemplateOnPanel(id);
  };

  useEffect(() => {
    const initActiveTemplateOnPanel = () => {
      if (prev === null && activeTemplateOnPanel === null && next !== null) {
        switchActiveTemplateOnPanel(id);
      }
    };

    initActiveTemplateOnPanel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTemplateOnPanel, id, next, prev]);

  useEffect(() => {
    const calculateOffset = () => {
      if (isActive) {
        changeTemplateListOffset({
          prev: prev ? 1 : 0,
          index: indexInTemplatesList,
          next: next ? 1 : 0,
        });
      }
    };

    calculateOffset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexInTemplatesList, isActive]);

  const templateRendererClassNames = cn(
    classes.templateDraggableRenderer,
    classes[positionBehaviour],
  );

  if (!isActive && activeTemplateOnPanel) {
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
