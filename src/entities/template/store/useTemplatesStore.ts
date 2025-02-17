import { TemplateType } from '@/shared/types';
import { create } from 'zustand';

interface TemplatesState {
  templates: TemplateType[];
  templatesAtPrototype: TemplateType[];
  showTemplatesOnPanel: boolean;
  setTemplates: (templates: TemplateType[]) => void;
  setTemplateAtPrototype: (newTemplates: TemplateType[]) => void;
  setShowTemplatesOnPanel: (newValue: boolean) => void;
}

export const useTemplatesStore = create<TemplatesState>((set) => ({
  templates: [],
  templatesAtPrototype: [],
  showTemplatesOnPanel: false,
  setTemplates: (templates: TemplateType[]) =>
    set(() => ({
      templates,
    })),
  setTemplateAtPrototype: (newTemplates: TemplateType[]) =>
    set(() => ({
      templatesAtPrototype: newTemplates,
    })),
  setShowTemplatesOnPanel: (newValue: boolean) =>
    set(() => ({
      showTemplatesOnPanel: newValue,
    })),
}));
