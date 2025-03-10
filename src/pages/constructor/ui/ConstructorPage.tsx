import { Prototype } from '@widgets/prototype';
import { PanelWithTemplates } from '@widgets/template';
import { ProjectControll } from '@/widgets/project';
import classes from './styles.module.scss';

export const ConstructorPage = () => {
  return (
    <div className={classes.constructorPage}>
      <ProjectControll />
      <Prototype />
      <PanelWithTemplates />
    </div>
  );
};
