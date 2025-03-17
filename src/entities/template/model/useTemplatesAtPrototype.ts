import { TemplateType } from '@shared/types';
import { useTemplatesStore } from '../store';

export const useTemplatesAtPrototype = () => {
  const { templatesAtPrototype, setTemplateAtPrototype } = useTemplatesStore();

  const addTemplateAtPrototype = (newTemplate: TemplateType) => {
    setTemplateAtPrototype([...templatesAtPrototype, newTemplate]);
  };

  const removeTemplateFromPrototype = (removedId: TemplateType['id']) => {
    setTemplateAtPrototype(
      templatesAtPrototype.filter((template) => template.id !== removedId),
    );
  };

  return {
    templatesAtPrototype,
    addTemplateAtPrototype,
    removeTemplateFromPrototype,
  };
};
