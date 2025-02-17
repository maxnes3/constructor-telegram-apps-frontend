import cn from 'classnames';
import classes from './styles.module.scss';
import { usePrototypeAreaBehavior } from '../model';

export const PrototypeLayoutArea = () => {
  const { isOverPrototype, positionBehaviour } = usePrototypeAreaBehavior();

  const templatePositionBehaviour = positionBehaviour ?? '';

  const prototypeLayoutAreaClassNames = cn(
    classes.prototypeLayoutArea,
    classes[templatePositionBehaviour],
    {
      [classes.isDisabled]: !isOverPrototype,
      [classes.isActive]: isOverPrototype,
    },
  );

  return <div className={prototypeLayoutAreaClassNames} />;
};
