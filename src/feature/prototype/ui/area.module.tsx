import { useConstructorStore } from '@entities/constructor';
import classNames from 'classnames';
import classes from './area.module.scss';

export const PrototypeLayoutArea = () => {
  const isOverPrototype = useConstructorStore((state) => state.isOverPrototype);
  const positionBehaviour = useConstructorStore(
    (state) => state.positionBehaviour,
  );
  const templatePositionBehaviour = positionBehaviour ? positionBehaviour : '';

  return (
    <div
      className={classNames(
        classes.prototypeLayoutArea,
        classes[templatePositionBehaviour],
        {
          [classes.isDisabled]: !isOverPrototype,
          [classes.isActive]: isOverPrototype,
        },
      )}
    />
  );
};
