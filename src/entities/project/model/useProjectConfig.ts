import { useProjectStore } from '../store/useProjectStore';

export const useProjectConfig = () => {
  const { projectName, setProjectName } = useProjectStore();

  const changeProjectName = (newValue: string) => {
    setProjectName(newValue);
  };

  return { projectName, changeProjectName };
};
