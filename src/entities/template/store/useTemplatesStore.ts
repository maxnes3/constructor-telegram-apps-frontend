import { TemplateType } from '@/shared/types';
import { create } from 'zustand';

interface TemplatesState {
  templates: TemplateType[];
  showTemplatesOnPanel: boolean;
  setTemplates: (templates: TemplateType[]) => void;
  setShowTemplatesOnPanel: (newValue: boolean) => void;
}

export const useTemplatesStore = create<TemplatesState>((set) => ({
  templates: [],
  showTemplatesOnPanel: false,
  setTemplates: (templates: TemplateType[]) =>
    set(() => ({
      templates,
    })),
  setShowTemplatesOnPanel: (newValue: boolean) =>
    set(() => ({
      showTemplatesOnPanel: newValue,
    })),
}));
