import { TemplateType } from '@shared/types';
import { useTemplatesStore } from '../store';

type removeTemplateFromPrototypeParams = {
  removedId: TemplateType['id'];
  positionBehaviour: string;
};

export const useTemplatesAtPrototype = () => {
  const { templatesAtPrototype, setTemplateAtPrototype } = useTemplatesStore();

  const addTemplateAtPrototype = (newTemplate: TemplateType) => {
    const newTemplatesAtPrototype = templatesAtPrototype;
    newTemplatesAtPrototype[newTemplate.positionBehaviour].push(newTemplate);
    setTemplateAtPrototype(newTemplatesAtPrototype);
  };

  const removeTemplateFromPrototype = ({
    removedId,
    positionBehaviour,
  }: removeTemplateFromPrototypeParams) => {
    const newTemplatesAtPrototype = templatesAtPrototype;
    newTemplatesAtPrototype[positionBehaviour].filter(
      (template) => template.id !== removedId,
    );
    setTemplateAtPrototype(newTemplatesAtPrototype);
  };

  return {
    templatesAtPrototype,
    addTemplateAtPrototype,
    removeTemplateFromPrototype,
  };
};
