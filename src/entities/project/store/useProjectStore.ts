import { create } from 'zustand';

interface ProjectState {
  projectName: string;
  projectMode: 'develop' | 'running';
  setProjectName: (newValue: string) => void;
  setProjectMode: (newValue: 'develop' | 'running') => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projectName: 'New Project',
  projectMode: 'develop',
  setProjectName: (newValue: string) =>
    set(() => ({
      projectName: newValue,
    })),
  setProjectMode: (newValue: 'develop' | 'running') =>
    set(() => ({
      projectMode: newValue,
    })),
}));
