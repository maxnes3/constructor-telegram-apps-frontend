import { TemplateDraggable } from '@feature/template/ui';
import { CSSProperties, useEffect, useMemo } from 'react';
import { useTemplatesList, useTemplatesQuery } from '@entities/template';
import { useCurrentCategory } from '@entities/category';
import classes from './styles.module.scss';

export const TemplatesDraggableList = () => {
  const { currentCategory } = useCurrentCategory();
  const { templates, getAllTemplates } = useTemplatesQuery();
  const { showTemplatesOnPanel, templateListOffset } = useTemplatesList();

  const templatesByCategory = useMemo(
    () =>
      templates.filter((template) => template.categoryId === currentCategory),
    [currentCategory, templates],
  );

  const templatesByCategoryRender = templatesByCategory.map(
    (template, index) => {
      const prev = templatesByCategory[index - 1]?.id ?? null;
      const next = templatesByCategory[index + 1]?.id ?? null;
      return (
        <TemplateDraggable
          key={template.id}
          template={template}
          prev={prev}
          next={next}
          indexInTemplatesList={index}
        />
      );
    },
  );

  const templatesListVariables = {
    '--offset-prev': templateListOffset.prev,
    '--offset-index': templateListOffset.index,
    '--offset-next': templateListOffset.next,
    '--is-negative': templateListOffset.index > 0 ? -1 : 1,
  } as CSSProperties;

  useEffect(() => {
    getAllTemplates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!showTemplatesOnPanel) return null;

  if (!templates.length) {
    return <span>No templates found.</span>;
  }

  return (
    <div className={classes.templatesDraggableList}>
      <ul
        className={classes.templatesDraggableListContent}
        style={templatesListVariables}
      >
        {templatesByCategoryRender}
      </ul>
    </div>
  );
};
