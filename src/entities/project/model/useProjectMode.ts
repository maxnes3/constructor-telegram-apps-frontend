import { useProjectStore } from '../store/useProjectStore';

export const useProjectMode = () => {
  const { projectMode, setProjectMode } = useProjectStore();

  const switchProjectMode = (newValue: 'develop' | 'running') => {
    setProjectMode(newValue);
  };

  return { projectMode, switchProjectMode };
};
