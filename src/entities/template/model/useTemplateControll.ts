import { useTemplatesStore } from '../store';

export const useTemplateControll = () => {
  const { templateInEditMode, setTemplateInEditMode } = useTemplatesStore();

  const changeTemplateInEditMode = (newValue: typeof templateInEditMode) => {
    setTemplateInEditMode(newValue);
  };

  return { templateInEditMode, changeTemplateInEditMode };
};
