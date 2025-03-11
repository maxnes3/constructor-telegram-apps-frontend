import {
  ProjectChangeDataPanel,
  ProjectSwitchModePanel,
} from '@feature/project';
import classes from './styles.module.scss';

export const ProjectControll = () => {
  return (
    <div className={classes.projectControll}>
      <ProjectChangeDataPanel />
      <ProjectSwitchModePanel />
    </div>
  );
};
