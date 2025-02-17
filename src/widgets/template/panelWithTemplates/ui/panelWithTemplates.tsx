import { CategorySwitch } from '@entities/category';
import { ListWithTemplatesDemo } from '@feature/template';
import { TogglePanel } from '@/feature/panels';
import classes from './styles.module.scss';

export const PanelWithTemplates = () => {
  return (
    <div className={classes.panelWithTemplates}>
      <TogglePanel />
      <CategorySwitch />
      <ListWithTemplatesDemo />
    </div>
  );
};
