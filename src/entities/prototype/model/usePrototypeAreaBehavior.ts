import { usePrototypeStore } from '../store';

export const usePrototypeAreaBehavior = () => {
  const {
    isOverPrototype,
    positionBehaviour,
    setIsOverPrototype,
    setPositionBehaviour,
  } = usePrototypeStore();

  const handleSetIsOverPrototype = (newValue: boolean) => {
    setIsOverPrototype(newValue);
  };

  const handleSetPositionBehaviour = (newValue: string | null) => {
    setPositionBehaviour(newValue);
  };

  return {
    isOverPrototype,
    positionBehaviour,
    handleSetIsOverPrototype,
    handleSetPositionBehaviour,
  };
};
