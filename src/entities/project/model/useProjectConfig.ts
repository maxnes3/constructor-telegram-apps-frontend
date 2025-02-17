import { useProjectStore } from '../store/useProjectStore';

export const useProjectConfig = () => {
  const { projectName, setProjectName } = useProjectStore();

  const handleSetProjectName = (newValue: string) => {
    setProjectName(newValue);
  };

  return { projectName, handleSetProjectName };
};
