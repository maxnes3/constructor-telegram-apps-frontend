import { TemplateType } from '@/shared/types';
import { create } from 'zustand';

interface TemplatesState {
  templates: TemplateType[];
  setTemplates: (templates: TemplateType[]) => void;
}

export const useTemplatesStore = create<TemplatesState>((set) => ({
  templates: [],
  setTemplates: (templates: TemplateType[]) =>
    set(() => ({
      templates,
    })),
}));
