import { ProjectChangeData } from '@/entities/project';
import classes from './styles.module.scss';
import { Border } from '@/shared/components';

export const ProjectChangeDataPanel = () => {
  return (
    <Border customClassNames={classes.projectChangeDataPanel}>
      <ProjectChangeData />
    </Border>
  );
};
