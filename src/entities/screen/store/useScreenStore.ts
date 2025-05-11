import { ScreenType, TemplatesAtPrototypeType } from '@/shared/types';
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

type ScreenAtProjectType = {
  screen: ScreenType;
  templatesAtScreen: TemplatesAtPrototypeType;
};

interface ScreenState {
  currentScreen: ScreenAtProjectType;
  projectScreens: ScreenAtProjectType[];
  setCurrentScreen: (newValue: ScreenAtProjectType) => void;
  setProjectScreens: (newValue: ScreenAtProjectType[]) => void;
}

const initialScreen: ScreenAtProjectType = {
  screen: { id: uuidv4(), name: 'Main Screen', isStartScreen: true },
  templatesAtScreen: { isTop: [], isFill: [], isBottom: [] },
};

export const useScreenStore = create<ScreenState>((set) => ({
  currentScreen: initialScreen,
  projectScreens: [initialScreen],
  setCurrentScreen: (newValue: ScreenAtProjectType) =>
    set(() => ({
      currentScreen: newValue,
    })),
  setProjectScreens: (newScreens: ScreenAtProjectType[]) =>
    set(() => ({
      projectScreens: newScreens,
    })),
}));
