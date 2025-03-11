import { usePrototypeStore } from '../store';

export const usePrototypeAreaBehavior = () => {
  const {
    isOverPrototype,
    positionBehaviour,
    setIsOverPrototype,
    setPositionBehaviour,
  } = usePrototypeStore();

  const switchIsOverPrototype = (newValue: boolean) => {
    setIsOverPrototype(newValue);
  };

  const changePositionBehaviour = (newValue: string | null) => {
    setPositionBehaviour(newValue);
  };

  return {
    isOverPrototype,
    positionBehaviour,
    switchIsOverPrototype,
    changePositionBehaviour,
  };
};
