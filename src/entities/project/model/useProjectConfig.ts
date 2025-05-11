import { useProjectStore } from '../store/useProjectStore';

export const useProjectConfig = () => {
  const { projectName, browserOS, setProjectName, setBrowserOS } =
    useProjectStore();

  const changeProjectName = (newValue: typeof projectName) => {
    setProjectName(newValue);
  };

  const changeBrowserOS = (newValue: typeof browserOS) => {
    setBrowserOS(newValue);
  };

  return { projectName, browserOS, changeProjectName, changeBrowserOS };
};
