import { FC } from 'react';
import { LayoutRouteProps } from 'react-router-dom';
import { BaseComponentsProps } from '@shared/components/type';
import classes from './styles.module.scss';
import cn from 'classnames';

type Props = {
  mode?: 'default' | 'active' | 'transparent';
  type?: 'submit' | 'button';
  onClick?: VoidFunction;
} & LayoutRouteProps &
  BaseComponentsProps;

export const Button: FC<Props> = ({
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
