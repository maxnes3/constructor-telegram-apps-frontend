import { TemplateType } from '@/shared/types';
import { useTemplatesStore } from '../store';

export const useTemplatesAtPrototype = () => {
  const { templatesAtPrototype, setTemplateAtPrototype } = useTemplatesStore();

  const addTemplateAtPrototype = (newTemplate: TemplateType) => {
    setTemplateAtPrototype([...templatesAtPrototype, newTemplate]);
  };

  return { templatesAtPrototype, addTemplateAtPrototype };
};
