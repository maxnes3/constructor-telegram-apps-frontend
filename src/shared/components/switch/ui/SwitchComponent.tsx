import { FC, useRef, useEffect, useState, CSSProperties } from 'react';
import { SwitchOptionType } from '../model';
import { BaseComponentsProps } from '../../type';
import cn from 'classnames';
import classes from './styles.module.scss';

type Props = {
  options: SwitchOptionType[];
  current: string;
  onSwitchValue: (newValue: string) => void;
  transitionClassNames?: string;
} & BaseComponentsProps;

export const Switch: FC<Props> = ({
  options,
  current,
  onSwitchValue: handleSwitchValue,
  customClassNames,
  transitionClassNames,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const backgroundTransitionProperties = {
    '--active-index': activeIndex,
    '--options-count': options.length,
  } as CSSProperties;

  useEffect(() => {
    const currentIndex = options.findIndex(
      (option) => option.value === current,
    );
    setActiveIndex(currentIndex);
  }, [current, options]);

  const switchComponentClassNames = cn(
    classes.switchComponent,
    customClassNames,
  );

  const backgroundTransitionClassNames = cn(
    classes.backgroundTransition,
    transitionClassNames,
  );

  return (
    <div className={switchComponentClassNames} ref={containerRef}>
      <div
        className={backgroundTransitionClassNames}
        style={backgroundTransitionProperties}
      />
      {options.map((option) => (
        <div
          key={option.value}
          className={cn(classes.option, {
            [classes.default]: option.value !== current,
            [classes.active]: option.value === current,
          })}
          onClick={() => handleSwitchValue(option.value)}
        >
          {option.component}
        </div>
      ))}
    </div>
  );
};
