import { TemplateType } from '@/shared/types';
import { create } from 'zustand';
import { TemplateListOffsetType } from '../types';
import { DEFAULT_TEMPLATE_LIST_OFFSET } from '../const';

interface TemplatesState {
  templates: TemplateType[];
  showTemplatesOnPanel: boolean;
  activeTemplateOnPanel: string | null;
  templateListOffset: TemplateListOffsetType;
  templateInEditMode: TemplateType | null;
  setTemplates: (templates: TemplateType[]) => void;
  setShowTemplatesOnPanel: (newValue: boolean) => void;
  setActiveTemplateOnPanel: (newValue: string | null) => void;
  setTemplateListOffset: (newValue: TemplateListOffsetType) => void;
  setTemplateInEditMode: (newValue: TemplateType | null) => void;
}

export const useTemplatesStore = create<TemplatesState>((set) => ({
  templates: [],
  showTemplatesOnPanel: false,
  activeTemplateOnPanel: null,
  templateListOffset: DEFAULT_TEMPLATE_LIST_OFFSET,
  templateInEditMode: null,
  setTemplates: (templates: TemplateType[]) =>
    set(() => ({
      templates,
    })),
  setShowTemplatesOnPanel: (newValue: boolean) =>
    set(() => ({
      showTemplatesOnPanel: newValue,
    })),
  setActiveTemplateOnPanel: (newValue: string | null) => {
    set(() => ({
      activeTemplateOnPanel: newValue,
    }));
  },
  setTemplateListOffset: (newValue: TemplateListOffsetType) => {
    set(() => ({
      templateListOffset: newValue,
    }));
  },
  setTemplateInEditMode: (newValue: TemplateType | null) => {
    set(() => ({
      templateInEditMode: newValue,
    }));
  },
}));
