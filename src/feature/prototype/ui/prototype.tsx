import { useMemo, useRef, useState } from 'react';
import { PrototypeType } from '@shared/types';
import { PhonePrototypeLayout } from './layout.module';
import classes from './prototype.module.scss';

const prototypes: PrototypeType[] = [
  {
    id: 'adasdad',
    modelName: 'iPhone 16',
    aspectRatioX: 9,
    aspectRatioY: 19.5,
    borderWidth: '4px',
    borderRadius: '24px',
  },
];

export const Prototype = () => {
  const [currentPrototype, setCurrentPrototype] = useState<PrototypeType>(
    prototypes[0],
  );
  const prototypeContainer = useRef<HTMLDivElement>(null);
  const prototypeContainerWidth = useMemo(
    () =>
      prototypeContainer.current
        ? prototypeContainer.current.offsetWidth
        : null,
    [],
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSwitchPrototype = (newPrototypeId: string) => {
    const newPrototype = prototypes.find(
      (prototype) => prototype.id === newPrototypeId,
    );
    if (!newPrototype) {
      return;
    }
    setCurrentPrototype(newPrototype);
  };

  return (
    <div ref={prototypeContainer} className={classes.phonePrototypeContainer}>
      <PhonePrototypeLayout
        model={currentPrototype}
        containerWidth={prototypeContainerWidth}
      />
    </div>
  );
};
