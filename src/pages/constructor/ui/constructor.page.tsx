import { PanelProject, PanelWithTemplates } from '@feature/panels';
import { PhonePrototype } from '@feature/prototypes/phone';
import classes from './styles.module.scss';

export const ConstructorPage = () => {
  return (
    <div className={classes.constructorPage}>
      <PanelProject />
      <PhonePrototype />
      <PanelWithTemplates />
    </div>
  );
};
