import { TemplateRenderer, useTemplateControll } from '@/entities/template';
import {
  ModalEnum,
  ModalLayout,
  useModalContext,
} from '@/shared/components/modal';
import classes from './styles.module.scss';
import cn from 'classnames';
import { Button } from '@/shared/components';
import { useScreensAtProject } from '@/entities/screen';
import { CrossIcon, EditIcon } from '@/shared/assets/icons';

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

  const handleEdit = () => {
    open(ModalEnum.EDIT_TEMPLATE);
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
          onClick={handleEdit}
          customClassNames={classes.controllButton}
        >
          <EditIcon />
          Edit Template
        </Button>
        <Button
          mode="active"
          onClick={handleRemove}
          customClassNames={classes.controllButton}
        >
          <CrossIcon />
          Remove
        </Button>
      </div>
    </ModalLayout>
  );
};
