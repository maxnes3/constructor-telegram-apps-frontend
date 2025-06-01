import { TemplateRenderer, useTemplateControll } from '@/entities/template';
import { FC } from 'react';
import { TemplateType } from '@/shared/types';
import { ModalEnum, useModalContext } from '@/shared/components/modal';
import classes from './styles.module.scss';
import cn from 'classnames';

type Props = {
  template: TemplateType;
};

export const PrototypeLayoutTemplate: FC<Props> = ({ template }) => {
  const { changeTemplateInEditMode } = useTemplateControll();
  const { open } = useModalContext();

  const handleClick = () => {
    changeTemplateInEditMode(template);
    open(ModalEnum.TEMPLATE_CONTROLL);
  };

  const prototypeLayoutTemplateClassNames = cn(
    classes.prototypeLayoutTemplate,
    classes[template.positionBehaviour],
  );

  return (
    <div
      className={classes.prototypeLayoutTemplateContainer}
      onClick={handleClick}
    >
      <TemplateRenderer
        codebaseTemplate={template.develop}
        customClassNames={prototypeLayoutTemplateClassNames}
      />
      <span className={classes.title}>{template.name}</span>
    </div>
  );
};
