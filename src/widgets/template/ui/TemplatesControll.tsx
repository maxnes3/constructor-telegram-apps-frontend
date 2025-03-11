import { CategorySwitch } from '@entities/category';
import { TemplatesDemoList } from '@feature/template';
import { TogglePanel } from '@/feature/panels';
import classes from './styles.module.scss';

export const TemplatesControll = () => {
  return (
    <div className={classes.templatesControll}>
      <TogglePanel />
      <CategorySwitch />
      <TemplatesDemoList />
    </div>
  );
};
