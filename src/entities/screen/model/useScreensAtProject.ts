import { TemplateType } from '@/shared/types';
import { useScreenStore } from '../store';

export const useScreensAtProject = () => {
  const { currentScreen, projectScreens, setCurrentScreen, setProjectScreens } =
    useScreenStore();

  const switchCurrentScreenById = (newScreenId: string) => {
    const newCurrentScreen = projectScreens.find(
      (screen) => screen.screen.id === newScreenId,
    );
    if (!newCurrentScreen) {
      throw new Error('Current screen not found');
    }
    setCurrentScreen(newCurrentScreen);
  };

  const checkTemplateAtScreenById = (templateId: string) => {
    const templatesAtCurrentScreen = Object.values(
      currentScreen.templatesAtScreen,
    ).flat();

    for (const template of templatesAtCurrentScreen) {
      if (template.id === templateId) return true;
    }

    return false;
  };

  const initialProjectScreens = (newScreens: typeof projectScreens) => {
    setProjectScreens(newScreens);
  };

  const getScreensWithTemplatesIds = () => {
    const screensWithTemplatesIds = projectScreens.map((screen) => {
      const templatesIds = Object.values(screen.templatesAtScreen)
        .flat()
        .map((template) => template.id);
      return {
        id: screen.screen.id,
        name: screen.screen.name,
        isStartScreen: screen.screen.isStartScreen,
        templatesIds,
      };
    });
    return screensWithTemplatesIds;
  };

  const addTemplateAtScreen = (newTemplate: TemplateType) => {
    const editedScreens = projectScreens.map((screen) => {
      if (screen.screen.id === currentScreen?.screen.id) {
        const newTemplatesAtScreen = screen.templatesAtScreen;
        newTemplatesAtScreen[newTemplate.positionBehaviour].push(newTemplate);
        return {
          ...screen,
          templatesAtScreen: newTemplatesAtScreen,
        };
      }
      return screen;
    });
    setProjectScreens(editedScreens);
  };

  const removeTemplateFromScreen = ({
    removedId,
    positionBehaviour,
  }: {
    removedId: TemplateType['id'];
    positionBehaviour: string;
  }) => {
    const editedScreens = projectScreens.map((screen) => {
      if (screen.screen.id === currentScreen?.screen.id) {
        const newTemplatesAtScreen = screen.templatesAtScreen;
        newTemplatesAtScreen[positionBehaviour] = newTemplatesAtScreen[
          positionBehaviour
        ].filter((template) => template.id !== removedId);
        return {
          ...screen,
          templatesAtScreen: newTemplatesAtScreen,
        };
      }
      return screen;
    });
    setProjectScreens(editedScreens);
  };

  return {
    currentScreen,
    projectScreens,
    switchCurrentScreenById,
    checkTemplateAtScreenById,
    getScreensWithTemplatesIds,
    initialProjectScreens,
    addTemplateAtScreen,
    removeTemplateFromScreen,
  };
};
