import { usePrototypeAreaBehavior } from '@entities/prototype/model';
import classes from './styles.module.scss';
import cn from 'classnames';

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
