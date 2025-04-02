import { TemplateType } from '@/shared/types';
import { create } from 'zustand';

interface TemplatesState {
  templates: TemplateType[];
  templatesAtPrototype: Record<string, TemplateType[]>;
  showTemplatesOnPanel: boolean;
  setTemplates: (templates: TemplateType[]) => void;
  setTemplateAtPrototype: (
    newTemplates: Record<string, TemplateType[]>,
  ) => void;
  setShowTemplatesOnPanel: (newValue: boolean) => void;
}

export const useTemplatesStore = create<TemplatesState>((set) => ({
  templates: [],
  templatesAtPrototype: { isTop: [], isFill: [], isBottom: [] },
  showTemplatesOnPanel: false,
  setTemplates: (templates: TemplateType[]) =>
    set(() => ({
      templates,
    })),
  setTemplateAtPrototype: (newTemplates: Record<string, TemplateType[]>) =>
    set(() => ({
      templatesAtPrototype: newTemplates,
    })),
  setShowTemplatesOnPanel: (newValue: boolean) =>
    set(() => ({
      showTemplatesOnPanel: newValue,
    })),
}));
