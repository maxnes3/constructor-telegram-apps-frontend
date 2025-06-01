import { ProjectChangeData, ProjectSwitchMode } from '@/entities/project';
import { ModalLayout, useModalContext } from '@/shared/components';
import { NovatoolkitIcon } from '@/shared/assets/icons';
import classes from './styles.module.scss';

export const ModalProjectControll = () => {
  const { close } = useModalContext();

  const handleClose = () => {
    close();
  };

  const projectControllTitle = (
    <span className={classes.title}>
      <NovatoolkitIcon className={classes.icon} />
      Controll
    </span>
  );

  return (
    <ModalLayout
      onClose={handleClose}
      title={projectControllTitle}
      contentClassNames={classes.modalProjectControll}
    >
      <ProjectChangeData
        inputClassName={classes.input}
        buttonClassName={classes.button}
      />
      <ProjectSwitchMode transitionClassName={classes.transition} />
    </ModalLayout>
  );
};
