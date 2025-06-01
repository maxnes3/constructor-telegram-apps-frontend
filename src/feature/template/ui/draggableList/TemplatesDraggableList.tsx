import { TemplateDraggable } from '@feature/template/ui';
import { CSSProperties, useEffect, useMemo, useState } from 'react';
import { useTemplatesList, useTemplatesQuery } from '@entities/template';
import { useCurrentCategory } from '@entities/category';
import classes from './styles.module.scss';

const getOffset = ({
  currentTemplateIndex,
  listLength,
}: {
  currentTemplateIndex: number;
  listLength: number;
}) => {
  if (listLength < 2) return 0;
  if (currentTemplateIndex === 0) return 1;
  if (currentTemplateIndex === listLength - 1) return -1;
  return 0;
};

export const TemplatesDraggableList = () => {
  const [currentTemplate, setCurrentTemplate] = useState<string | null>(null);
  const { currentCategory } = useCurrentCategory();
  const { templates, getAllTemplates } = useTemplatesQuery();
  const { showTemplatesOnPanel } = useTemplatesList();

  const handleChangeCurrentTemplate = (templateId: string) => {
    setCurrentTemplate(templateId);
  };

  const templatesByCategory = useMemo(() => {
    const result = templates.filter(
      (template) => template.categoryId === currentCategory,
    );
    setCurrentTemplate(result[0]?.id ?? null);
    return result;
  }, [currentCategory, templates]);

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
          isActive={template.id === currentTemplate}
          onChangeCurrentTemplate={handleChangeCurrentTemplate}
        />
      );
    },
  );

  const templatesListVariables = {
    '--is-offset': getOffset({
      currentTemplateIndex: templatesByCategory.findIndex(
        (template) => template.id === currentTemplate,
      ),
      listLength: templatesByCategory.length,
    }),
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
