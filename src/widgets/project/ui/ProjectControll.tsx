import {
  ProjectChangeDataPanel,
  ProjectMobileControllButton,
  ProjectSwitchModePanel,
} from '@feature/project';
import { useMobile } from '@shared/hooks';
import classes from './styles.module.scss';

export const ProjectControll = () => {
  const isMobile = useMobile();

  return (
    <div className={classes.projectControll}>
      {!isMobile ? (
        <>
          <ProjectChangeDataPanel />
          <ProjectSwitchModePanel />
        </>
      ) : (
        <ProjectMobileControllButton />
      )}
    </div>
  );
};
