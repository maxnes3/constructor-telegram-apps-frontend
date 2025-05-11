import { BrowserOSEnum } from '@/shared/types';
import { ProjectModeEnum } from '@/shared/types';
import { create } from 'zustand';

interface ProjectState {
  projectName: string;
  projectMode: ProjectModeEnum;
  browserOS: BrowserOSEnum;
  setProjectName: (newValue: string) => void;
  setProjectMode: (newValue: ProjectModeEnum) => void;
  setBrowserOS: (newValue: BrowserOSEnum) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projectName: 'New Project',
  projectMode: ProjectModeEnum.DEVELOP,
  browserOS: BrowserOSEnum.WINDOWS,
  setProjectName: (newValue: string) =>
    set(() => ({
      projectName: newValue,
    })),
  setProjectMode: (newValue: ProjectModeEnum) =>
    set(() => ({
      projectMode: newValue,
    })),
  setBrowserOS: (newValue: BrowserOSEnum) =>
    set(() => ({
      browserOS: newValue,
    })),
}));
