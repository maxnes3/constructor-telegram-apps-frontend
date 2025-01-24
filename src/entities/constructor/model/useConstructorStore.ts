import { TemplateType } from '@shared/types';
import { create } from 'zustand';

interface ConstructorState {
  projectName: string;
  isOverPrototype: boolean;
  isScaledPrototype: boolean;
  positionBehaviour: string | null;
  templatesAtPrototype: TemplateType[];
  setProjectName: (newValue: string) => void;
  setIsOverPrototype: (newValue: boolean) => void;
  setIsScaledPrototype: (newValue: boolean) => void;
  setPositionBehaviour: (newValue: string | null) => void;
  addTemplateAtPrototype: (newTemplate: TemplateType) => void;
}

export const useConstructorStore = create<ConstructorState>((set) => ({
  projectName: 'New Project',
  isOverPrototype: false,
  isScaledPrototype: true,
  positionBehaviour: null,
  templatesAtPrototype: [],
  setProjectName: (newValue: string) =>
    set(() => ({
      projectName: newValue,
    })),
  setIsOverPrototype: (newValue: boolean) =>
    set(() => ({
      isOverPrototype: newValue,
    })),
  setPositionBehaviour: (newValue: string | null) =>
    set(() => ({
      positionBehaviour: newValue,
    })),
  setIsScaledPrototype: (newValue: boolean) =>
    set(() => ({
      isScaledPrototype: newValue,
    })),
  addTemplateAtPrototype: (newTemplate: TemplateType) =>
    set((state) => ({
      templatesAtPrototype: [...state.templatesAtPrototype, newTemplate],
    })),
}));
