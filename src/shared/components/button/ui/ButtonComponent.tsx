import { FC } from 'react';
import { LayoutRouteProps } from 'react-router-dom';
import classes from './styles.module.scss';
import cn from 'classnames';

type ButtonProps = {
  mode?: 'default' | 'active' | 'transparent';
  type?: 'submit' | 'button';
  onClick?: VoidFunction;
  customClassNames?: string;
} & LayoutRouteProps;

export const Button: FC<ButtonProps> = ({
  mode = 'default',
  type = 'button',
  onClick,
  customClassNames,
  children,
}) => {
  const buttonClassName = cn(
    classes.buttonComponent,
    classes[mode],
    customClassNames,
  );

  return (
    <button type={type} onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};
