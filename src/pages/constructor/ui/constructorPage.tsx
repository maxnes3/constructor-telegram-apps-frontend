import { Prototype } from '@widgets/prototype';
import { PanelProjectControll } from '@/feature/project';
import { PanelWithTemplates } from '@/widgets/template';
import classes from './styles.module.scss';

export const ConstructorPage = () => {
  return (
    <div className={classes.constructorPage}>
      <PanelProjectControll />
      <Prototype />
      <PanelWithTemplates />
    </div>
  );
};
