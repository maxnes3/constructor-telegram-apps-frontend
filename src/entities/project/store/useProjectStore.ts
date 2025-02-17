import { create } from 'zustand';

interface ProjectState {
  projectName: string;
  setProjectName: (newValue: string) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projectName: 'New Project',
  setProjectName: (newValue: string) =>
    set(() => ({
      projectName: newValue,
    })),
}));
