import { TemplateRenderer, useTemplatesAtPrototype } from '@entities/template';
import classes from './styles.module.scss';
import { useProjectMode } from '@/entities/project';
import { EmptyContentIcon } from '@/shared/assets/icons';

export const PrototypeRunningLayout = () => {
  const { projectMode } = useProjectMode();
  const { templatesAtPrototype } = useTemplatesAtPrototype();

  const templatesAtPrototypeRender =
    templatesAtPrototype.length > 0 &&
    templatesAtPrototype.map((template) => (
      <TemplateRenderer key={template.id} buildTemplate={template.prototype} />
    ));

  if (projectMode !== 'running') return null;

  if (templatesAtPrototype.length === 0) {
    return (
      <div className={classes.emptyContent}>
        <EmptyContentIcon />
        Empty
      </div>
    );
  }

  return (
    <div className={classes.prototypeRunningLayout}>
      {templatesAtPrototypeRender}
    </div>
  );
};
