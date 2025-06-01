import { ProjectSwitchMode } from '@/entities/project';
import { Border } from '@/shared/components';
import classes from './styles.module.scss';

export const ProjectSwitchModePanel = () => {
  return (
    <Border customClassNames={classes.projectSwitchModePanel}>
      <ProjectSwitchMode />
    </Border>
  );
};
