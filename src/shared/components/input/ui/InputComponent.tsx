import { FC } from 'react';
import { BaseComponentsProps } from '@shared/components/type';
import classes from './styles.module.scss';
import cn from 'classnames';

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (newValue: string) => void;
} & BaseComponentsProps;

export const Input: FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  customClassNames,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const inputComponentClassNames = cn(classes.inputComponent, customClassNames);

  return (
    <input
      value={value}
      placeholder={placeholder}
      className={inputComponentClassNames}
      onChange={handleInputChange}
    />
  );
};
