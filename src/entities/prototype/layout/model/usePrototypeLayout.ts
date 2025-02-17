import { usePrototypeStore } from '../../store';

export const usePrototypeLayout = () => {
  const { isScaledPrototype, setIsScaledPrototype } = usePrototypeStore();

  const handleSetIsScaledPrototype = (newValue: boolean) => {
    setIsScaledPrototype(newValue);
  };

  return {
    isScaledPrototype,
    handleSetIsScaledPrototype,
  };
};
