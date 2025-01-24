import { ToggleButton } from './toggle.module';
import { CategorySwitch } from './category.module';
import { TemplatesList } from './templates.module';
import classes from './styles.module.scss';

export const PanelWithTemplates = () => {
  return (
    <div className={classes.panelWithTemplates}>
      <ToggleButton />
      <CategorySwitch />
      <TemplatesList />
    </div>
  );
};
