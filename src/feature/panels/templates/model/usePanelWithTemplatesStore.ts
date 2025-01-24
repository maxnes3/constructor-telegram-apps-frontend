import { create } from 'zustand';

interface PanelWithTemplatesState {
  showTemplates: boolean;
  currentCategory: string | null;
  setShowTemplates: (newValue: boolean) => void;
  setCurrentCategory: (newValue: string) => void;
}

export const usePanelWithTemplatesStore = create<PanelWithTemplatesState>(
  (set) => ({
    showTemplates: false,
    currentCategory: null,
    setShowTemplates: (newValue: boolean) =>
      set(() => ({
        showTemplates: newValue,
      })),
    setCurrentCategory: (newValue: string) =>
      set(() => ({
        currentCategory: newValue,
      })),
  }),
);
