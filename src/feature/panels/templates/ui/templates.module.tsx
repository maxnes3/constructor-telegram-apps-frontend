import { TemplateDemo } from '@entities/template';
import { usePanelWithTemplatesStore, useTemplatesStore } from '../model';
import { useEffect, useMemo } from 'react';
import { useTemplatesQuery } from '../api';
import classes from './templates.module.scss';

export const TemplatesList = () => {
  const showTemplates = usePanelWithTemplatesStore(
    (state) => state.showTemplates,
  );
  const currentCategory = usePanelWithTemplatesStore(
    (state) => state.currentCategory,
  );
  const templates = useTemplatesStore((state) => state.templates);
  const { handleGetAllTemplates } = useTemplatesQuery();

  const templatesByCategory = useMemo(
    () =>
      templates.filter((template) => template.categoryId === currentCategory),
    [currentCategory, templates],
  );

  useEffect(() => {
    handleGetAllTemplates();
  }, []);

  if (!templates.length) {
    return <div>No templates found.</div>;
  }

  return (
    showTemplates && (
      <div className={classes.templatesListContainer}>
        <ul className={classes.templatesListContent}>
          {templatesByCategory.map((template) => (
            <TemplateDemo key={template.id} template={template} />
          ))}
        </ul>
      </div>
    )
  );
};
