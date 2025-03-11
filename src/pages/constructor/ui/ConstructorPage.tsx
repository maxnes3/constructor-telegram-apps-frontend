import { PrototypeControll } from '@widgets/prototype';
import { TemplatesControll } from '@widgets/template';
import { ProjectControll } from '@widgets/project';
import classes from './styles.module.scss';

export const ConstructorPage = () => {
  return (
    <div className={classes.constructorPage}>
      <ProjectControll />
      <PrototypeControll />
      <TemplatesControll />
    </div>
  );
};
