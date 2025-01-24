import { PanelProjectControll, PanelWithTemplates } from '@feature/panels';
import { Prototype } from '@feature/prototype';
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
