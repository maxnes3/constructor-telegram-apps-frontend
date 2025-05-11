import { FC, useRef, useEffect, useState, CSSProperties } from 'react';
import { SwitchOptionType } from '../model';
import cn from 'classnames';
import classes from './styles.module.scss';
import { BaseComponentsProps } from '../../type';

type SwitchProps = {
  options: SwitchOptionType[];
  current: string;
  handleSwitchValue: (newValue: string) => void;
} & BaseComponentsProps;

export const Switch: FC<SwitchProps> = ({
  options,
  current,
  handleSwitchValue,
  customClassNames,
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

  return (
    <div className={switchComponentClassNames} ref={containerRef}>
      <div
        className={classes.backgroundTransition}
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
