import { usePrototypeStore } from '../store';

export const usePrototypeLayout = () => {
  const { isScaledPrototype, setIsScaledPrototype } = usePrototypeStore();

  const switchIsScaledPrototype = (newValue: typeof isScaledPrototype) => {
    setIsScaledPrototype(newValue);
  };

  return {
    isScaledPrototype,
    switchIsScaledPrototype,
  };
};
