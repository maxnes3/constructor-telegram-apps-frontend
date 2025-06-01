import { ControllIcon } from '@/shared/assets/icons';
import { Button, ModalEnum, useModalContext } from '@/shared/components';
import { Border } from '@/shared/components';
import classes from './styles.module.scss';

export const ProjectMobileControllButton = () => {
  const { open } = useModalContext();

  const handleClick = () => {
    open(ModalEnum.PROJECT_CONTROLL);
  };

  return (
    <Border>
      <Button
        mode="active"
        onClick={handleClick}
        customClassNames={classes.projectMobileControllButton}
      >
        <ControllIcon className={classes.icon} />
        CONTROLL
      </Button>
    </Border>
  );
};
