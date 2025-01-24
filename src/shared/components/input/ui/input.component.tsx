import { FC } from 'react';
import classes from './styles.module.scss';

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (newValue: string) => void;
};

export const Input: FC<InputProps> = ({ value, placeholder, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      value={value}
      placeholder={placeholder}
      className={classes.inputComponent}
      onChange={handleInputChange}
    />
  );
};
