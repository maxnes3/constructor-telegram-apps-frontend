import { create } from 'zustand';

interface PrototypeState {
  isOverPrototype: boolean;
  isScaledPrototype: boolean;
  positionBehaviour: string | null;
  setIsOverPrototype: (newValue: boolean) => void;
  setIsScaledPrototype: (newValue: boolean) => void;
  setPositionBehaviour: (newValue: string | null) => void;
}

export const usePrototypeStore = create<PrototypeState>((set) => ({
  isOverPrototype: false,
  isScaledPrototype: true,
  positionBehaviour: null,
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
}));
