import { useTemplatesStore } from '../store';

export const useTemplatesList = () => {
  const { showTemplatesOnPanel, setShowTemplatesOnPanel } = useTemplatesStore();

  const switchShowTemplatesOnPanel = (
    newValue: typeof showTemplatesOnPanel,
  ) => {
    setShowTemplatesOnPanel(newValue);
  };

  return {
    showTemplatesOnPanel,
    switchShowTemplatesOnPanel,
  };
};
