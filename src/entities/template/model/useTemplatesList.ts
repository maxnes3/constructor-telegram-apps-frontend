import { useTemplatesStore } from '../store';

export const useTemplatesList = () => {
  const {
    showTemplatesOnPanel,
    activeTemplateOnPanel,
    templateListOffset,
    setShowTemplatesOnPanel,
    setActiveTemplateOnPanel,
    setTemplateListOffset,
  } = useTemplatesStore();

  const switchShowTemplatesOnPanel = (
    newValue: typeof showTemplatesOnPanel,
  ) => {
    setShowTemplatesOnPanel(newValue);
  };

  const switchActiveTemplateOnPanel = (
    newValue: typeof activeTemplateOnPanel,
  ) => {
    setActiveTemplateOnPanel(newValue);
  };

  const changeTemplateListOffset = (newValue: typeof templateListOffset) => {
    setTemplateListOffset(newValue);
  };

  return {
    showTemplatesOnPanel,
    activeTemplateOnPanel,
    templateListOffset,
    switchShowTemplatesOnPanel,
    switchActiveTemplateOnPanel,
    changeTemplateListOffset,
  };
};
