import { TemplateType } from '@/shared/types';
import { create } from 'zustand';
interface TemplatesState {
  templates: TemplateType[];
  showTemplatesOnPanel: boolean;
  templateInEditMode: TemplateType | null;
  setTemplates: (templates: TemplateType[]) => void;
  setShowTemplatesOnPanel: (newValue: boolean) => void;
  setTemplateInEditMode: (newValue: TemplateType | null) => void;
}

export const useTemplatesStore = create<TemplatesState>((set) => ({
  templates: [],
  showTemplatesOnPanel: false,
  templateInEditMode: null,
  setTemplates: (templates: TemplateType[]) =>
    set(() => ({
      templates,
    })),
  setShowTemplatesOnPanel: (newValue: boolean) =>
    set(() => ({
      showTemplatesOnPanel: newValue,
    })),
  setTemplateInEditMode: (newValue: TemplateType | null) => {
    set(() => ({
      templateInEditMode: newValue,
    }));
  },
}));
