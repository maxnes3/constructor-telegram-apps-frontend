import { usePrototypeStore } from '../store';

export const usePrototypeLayout = () => {
  const { isScaledPrototype, setIsScaledPrototype } = usePrototypeStore();

  const switchIsScaledPrototype = (newValue: boolean) => {
    setIsScaledPrototype(newValue);
  };

  return {
    isScaledPrototype,
    switchIsScaledPrototype,
  };
};
