import { TemplateRenderer, useTemplatesAtPrototype } from '@entities/template';
import classes from './styles.module.scss';
import { useProjectMode } from '@/entities/project';

export const PrototypeRunningLayout = () => {
  const { projectMode } = useProjectMode();
  const { templatesAtPrototype } = useTemplatesAtPrototype();

  const templatesAtPrototypeRender =
    templatesAtPrototype.length > 0 &&
    templatesAtPrototype.map((template) => (
      <TemplateRenderer key={template.id} template={template} />
    ));

  return (
    projectMode === 'running' && (
      <div className={classes.prototypeRunningLayout}>
        {templatesAtPrototypeRender}
      </div>
    )
  );
};
