import { TemplateRenderer } from '@entities/template';
import { useProjectMode } from '@/entities/project';
import { EmptyContentIcon } from '@/shared/assets/icons';
import { memo, useCallback } from 'react';
import { POSITION_BEHAVIOUR_STACK } from '@feature/prototype/model';
import classes from './styles.module.scss';
import cn from 'classnames';
import { useScreensAtProject } from '@/entities/screen';
import { ProjectModeEnum } from '@/shared/types';

const PrototypeRunningLayout = () => {
  const { projectMode } = useProjectMode();
  const { currentScreen } = useScreensAtProject();

  const templatesAtPrototype = currentScreen.templatesAtScreen;

  const templatesAtPrototypeRender = useCallback(
    (positionBehaviour: string) =>
      templatesAtPrototype[positionBehaviour].length > 0 &&
      templatesAtPrototype[positionBehaviour].map((template) => (
        <TemplateRenderer
          key={template.id}
          buildTemplate={template.prototype}
          customClassNames={cn(
            classes.prototypeRunningTemplate,
            classes[template.positionBehaviour],
          )}
        />
      )),
    [templatesAtPrototype],
  );

  if (projectMode !== ProjectModeEnum.RUNNING) return null;

  if (
    Object.values(templatesAtPrototype).every(
      (templates) => templates.length === 0,
    )
  ) {
    return (
      <div className={classes.emptyContent}>
        <EmptyContentIcon />
        Empty
      </div>
    );
  }

  return (
    <div className={classes.prototypeRunningLayout}>
      {POSITION_BEHAVIOUR_STACK.map((positionBehaviour) =>
        templatesAtPrototypeRender(positionBehaviour),
      )}
    </div>
  );
};

export default memo(PrototypeRunningLayout);
