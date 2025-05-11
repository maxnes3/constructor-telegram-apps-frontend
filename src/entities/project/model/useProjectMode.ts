import { useProjectStore } from '../store/useProjectStore';

export const useProjectMode = () => {
  const { projectMode, setProjectMode } = useProjectStore();

  const switchProjectMode = (newValue: typeof projectMode) => {
    setProjectMode(newValue);
  };

  return { projectMode, switchProjectMode };
};
