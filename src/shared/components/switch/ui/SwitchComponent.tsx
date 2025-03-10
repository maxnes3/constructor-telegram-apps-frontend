import { FC, useRef, useEffect, useState, CSSProperties } from 'react';
import classes from './styles.module.scss';
import { SwitchOptionType } from '../model';
import classNames from 'classnames';

type SwitchProps = {
  options: SwitchOptionType[];
  current: string;
  handleSwitchValue: (newValue: string) => void;
};

export const Switch: FC<SwitchProps> = ({
  options,
  current,
  handleSwitchValue,
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

  return (
    <div className={classes.switchComponent} ref={containerRef}>
      <div
        className={classes.backgroundTransition}
        style={backgroundTransitionProperties}
      />
      {options.map((option) => (
        <div
          key={option.value}
          className={classNames(classes.option, {
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
