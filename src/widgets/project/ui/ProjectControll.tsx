import { PanelProjectData, PanelProjectMode } from '@feature/project';
import classes from './styles.module.scss';

export const ProjectControll = () => {
  return (
    <div className={classes.projectControll}>
      <PanelProjectData />
      <PanelProjectMode />
    </div>
  );
};
