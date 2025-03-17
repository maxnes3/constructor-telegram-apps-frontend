import { TemplateDraggable } from '@feature/template';
import { useEffect, useMemo } from 'react';
import {
  useTemplatesListBehavior,
  useTemplatesQuery,
} from '@entities/template';
import { useCurrentCategory } from '@entities/category';
import classes from './styles.module.scss';

export const TemplatesDraggableList = () => {
  const { currentCategory } = useCurrentCategory();
  const { templates, getAllTemplates } = useTemplatesQuery();
  const { showTemplatesOnPanel } = useTemplatesListBehavior();

  const templatesByCategory = useMemo(
    () =>
      templates.filter((template) => template.categoryId === currentCategory),
    [currentCategory, templates],
  );

  const templatesByCategoryRender = templatesByCategory.map((template) => (
    <TemplateDraggable key={template.id} template={template} />
  ));

  useEffect(() => {
    getAllTemplates();
  }, []);

  if (!templates.length) {
    return <span>No templates found.</span>;
  }

  return (
    showTemplatesOnPanel && (
      <div className={classes.templatesDraggableList}>
        <ul className={classes.templatesDraggableListContent}>
          {templatesByCategoryRender}
        </ul>
      </div>
    )
  );
};
