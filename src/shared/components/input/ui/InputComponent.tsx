import { ChangeEvent, FC } from 'react';
import { BaseComponentsProps } from '@shared/components/type';
import classes from './styles.module.scss';
import cn from 'classnames';

type Props = {
  value: string;
  placeholder: string;
  onChange: (newValue: string) => void;
  type?: 'text' | 'password';
  isError?: boolean;
} & BaseComponentsProps;

export const Input: FC<Props> = ({
  value,
  placeholder,
  onChange,
  customClassNames,
  type = 'text',
  isError = false,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const inputComponentClassNames = cn(
    classes.inputComponent,
    customClassNames,
    { [classes.isError]: isError },
  );

  return (
    <input
      value={value}
      placeholder={placeholder}
      className={inputComponentClassNames}
      onChange={handleInputChange}
      type={type}
    />
  );
};
