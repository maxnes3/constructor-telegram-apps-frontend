import { TemplateDemo } from '@/feature/template';
import { useEffect, useMemo } from 'react';
import {
  useTemplatesListBehavior,
  useTemplatesQuery,
} from '@/entities/template';
import { useCurrentCategory } from '@/entities/category';
import classes from './styles.module.scss';

export const ListWithTemplatesDemo = () => {
  const { currentCategory } = useCurrentCategory();
  const { templates, handleGetAllTemplates } = useTemplatesQuery();
  const { showTemplatesOnPanel } = useTemplatesListBehavior();

  const templatesByCategory = useMemo(
    () =>
      templates.filter((template) => template.categoryId === currentCategory),
    [currentCategory, templates],
  );

  const templatesByCategoryRender = templatesByCategory.map((template) => (
    <TemplateDemo key={template.id} template={template} />
  ));

  useEffect(() => {
    handleGetAllTemplates();
  }, []);

  if (!templates.length) {
    return <span>No templates found.</span>;
  }

  return (
    showTemplatesOnPanel && (
      <div className={classes.templatesListContainer}>
        <ul className={classes.templatesListContent}>
          {templatesByCategoryRender}
        </ul>
      </div>
    )
  );
};
