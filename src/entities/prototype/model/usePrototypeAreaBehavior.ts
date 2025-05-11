import { usePrototypeStore } from '../store';

export const usePrototypeAreaBehavior = () => {
  const {
    isOverPrototype,
    positionBehaviour,
    setIsOverPrototype,
    setPositionBehaviour,
  } = usePrototypeStore();

  const switchIsOverPrototype = (newValue: typeof isOverPrototype) => {
    setIsOverPrototype(newValue);
  };

  const changePositionBehaviour = (newValue: typeof positionBehaviour) => {
    setPositionBehaviour(newValue);
  };

  return {
    isOverPrototype,
    positionBehaviour,
    switchIsOverPrototype,
    changePositionBehaviour,
  };
};
