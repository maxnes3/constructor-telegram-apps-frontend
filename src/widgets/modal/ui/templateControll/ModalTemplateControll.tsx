import { TemplateRenderer, useTemplateControll } from '@/entities/template';
import {
  ModalEnum,
  ModalLayout,
  useModalContext,
  Button,
} from '@/shared/components';
import { useScreensAtProject } from '@/entities/screen';
import { CodeIcon, CrossIcon } from '@/shared/assets/icons';
import classes from './styles.module.scss';
import cn from 'classnames';

export const ModalTemplateControll = () => {
  const { templateInEditMode, changeTemplateInEditMode } =
    useTemplateControll();
  const { removeTemplateFromScreen } = useScreensAtProject();
  const { open, close } = useModalContext();

  if (!templateInEditMode) {
    close();
    return null;
  }

  const handleClose = () => {
    changeTemplateInEditMode(null);
    close();
  };

  const handleOpenViewCode = () => {
    open(ModalEnum.VIEW_CODE);
  };

  const handleRemove = () => {
    removeTemplateFromScreen({
      removedId: templateInEditMode.id,
      positionBehaviour: templateInEditMode.positionBehaviour,
    });
    close();
  };

  return (
    <ModalLayout
      onClose={handleClose}
      contentClassNames={classes.modalTemplateControll}
    >
      <div className={classes.templateInEditModeContainer}>
        <TemplateRenderer
          codebaseTemplate={templateInEditMode.develop}
          customClassNames={cn(
            classes.templateInEditModeRenderer,
            classes[templateInEditMode.positionBehaviour],
          )}
        />
        <span className={classes.title}>{templateInEditMode.name}</span>
      </div>
      <div className={classes.controllButtonsContainer}>
        <Button
          mode="active"
          onClick={handleOpenViewCode}
          customClassNames={classes.controllButton}
        >
          <CodeIcon className={classes.icon} />
          View Code
        </Button>
        <Button
          mode="active"
          onClick={handleRemove}
          customClassNames={classes.controllButton}
        >
          <CrossIcon className={classes.icon} />
          Remove
        </Button>
      </div>
    </ModalLayout>
  );
};
