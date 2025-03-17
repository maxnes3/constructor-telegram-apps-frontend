import { PROTOTYPE_ID } from '@shared/types';
import {
  PrototypeDevelopLayout,
  PrototypeRunningLayout,
  PrototypeTelegramTopPanel,
} from '@feature/prototype';
import { usePrototypeLayout } from '@entities/prototype';
import classes from './styles.module.scss';
import cn from 'classnames';

export const PrototypeControll = () => {
  const { isScaledPrototype } = usePrototypeLayout();

  const prototypeLayoutContainerClassNames = cn(
    classes.prototypeLayoutContainer,
    {
      [classes.isScaled]: isScaledPrototype,
    },
  );

  return (
    <div className={classes.prototypeControll}>
      <div id={PROTOTYPE_ID} className={prototypeLayoutContainerClassNames}>
        <PrototypeTelegramTopPanel />
        <PrototypeDevelopLayout />
        <PrototypeRunningLayout />
      </div>
    </div>
  );
};
