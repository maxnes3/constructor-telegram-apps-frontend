import { FC, ReactNode } from 'react';
import { CrossIcon } from '@/shared/assets/icons';
import { BaseComponentsProps } from '@/shared/components/type';
import classes from './styles.module.scss';
import cn from 'classnames';

type ModalLayoutProps = {
  children?: ReactNode;
  title?: ReactNode;
  onClose?: VoidFunction;
} & BaseComponentsProps;

export const ModalLayout: FC<ModalLayoutProps> = ({
  children,
  title,
  onClose,
  customClassNames,
}) => {
  const modalLayoutClassNames = cn(classes.modalLayout, customClassNames);
  return (
    <dialog className={modalLayoutClassNames}>
      {onClose && <CrossIcon className={classes.closeIcon} onClick={onClose} />}
      {title && (
        <div className={classes.modalLayoutHeader}>
          <h2 className={classes.modalTitle}>{title}</h2>
        </div>
      )}
      <div className={classes.modalLayoutContent}>{children}</div>
    </dialog>
  );
};
