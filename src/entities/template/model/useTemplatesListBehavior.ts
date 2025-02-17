import { useTemplatesStore } from '../store';

export const useTemplatesListBehavior = () => {
  const { showTemplatesOnPanel, setShowTemplatesOnPanel } = useTemplatesStore();

  const handleSetShowTemplatesOnPanel = (newValue: boolean) => {
    setShowTemplatesOnPanel(newValue);
  };

  return { showTemplatesOnPanel, handleSetShowTemplatesOnPanel };
};
