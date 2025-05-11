import { TemplateRenderer } from '@/entities/template';
import { FC, useState } from 'react';
import { TemplateType } from '@/shared/types';
import { Button } from '@/shared/components';
import { CrossIcon } from '@/shared/assets/icons';
import { useScreensAtProject } from '@/entities/screen';
import classes from './styles.module.scss';
import cn from 'classnames';

type PrototypeLayoutTemplateProps = {
  template: TemplateType;
};

export const PrototypeLayoutTemplate: FC<PrototypeLayoutTemplateProps> = ({
  template,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { removeTemplateFromScreen } = useScreensAtProject();

  const handleCollapse = () => {
    setIsActive((prev) => !prev);
  };

  const handleRemove = () => {
    removeTemplateFromScreen({
      removedId: template.id,
      positionBehaviour: template.positionBehaviour,
    });
  };

  const prototypeLayoutTemplateClassNames = cn(
    classes.prototypeLayoutTemplate,
    classes[template.positionBehaviour],
  );

  const collapseButtonContainer = isActive && (
    <div className={classes.prototypeLayoutTemplateButtons}>
      <span className={classes.title}>{template.name}</span>
      <Button
        mode="active"
        onClick={handleRemove}
        customClassNames={classes.button}
      >
        <CrossIcon className={classes.icon} />
        <span>Remove</span>
      </Button>
    </div>
  );

  return (
    <div
      className={classes.prototypeLayoutTemplateContainer}
      onClick={handleCollapse}
    >
      <TemplateRenderer
        buildTemplate={template.demo}
        customClassNames={prototypeLayoutTemplateClassNames}
      />
      {collapseButtonContainer}
    </div>
  );
};
