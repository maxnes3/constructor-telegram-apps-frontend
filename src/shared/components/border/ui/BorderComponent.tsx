import { FC, ReactNode } from 'react';
import { BaseComponentsProps } from '../../type';
import classes from './styles.module.scss';
import cn from 'classnames';

type Props = {
  children?: ReactNode;
  rootClassName?: string;
} & BaseComponentsProps;

export const BorderComponent: FC<Props> = ({
  children,
  rootClassName,
  customClassNames,
}) => {
  return (
    <div className={cn(classes.borderComponent, rootClassName)}>
      <div className={cn(classes.borderComponentContent, customClassNames)}>
        {children}
      </div>
    </div>
  );
};
