import { useTemplatesStore } from '../store';

export const useTemplatesListBehavior = () => {
  const { showTemplatesOnPanel, setShowTemplatesOnPanel } = useTemplatesStore();

  const switchShowTemplatesOnPanel = (newValue: boolean) => {
    setShowTemplatesOnPanel(newValue);
  };

  return { showTemplatesOnPanel, switchShowTemplatesOnPanel };
};
