import { FC, ReactNode } from 'react';
import { BackIcon, CrossIcon } from '@/shared/assets/icons';
import classes from './styles.module.scss';
import cn from 'classnames';

type ModalLayoutProps = {
  children?: ReactNode;
  title?: ReactNode;
  onBack?: VoidFunction;
  onClose?: VoidFunction;
  rootClassNames?: string;
  contentClassNames?: string;
};

export const ModalLayout: FC<ModalLayoutProps> = ({
  children,
  title,
  onBack,
  onClose,
  rootClassNames,
  contentClassNames,
}) => {
  return (
    <dialog className={cn(classes.modalLayout, rootClassNames)}>
      {onBack && <BackIcon className={classes.backIcon} onClick={onBack} />}
      {onClose && <CrossIcon className={classes.closeIcon} onClick={onClose} />}
      {title && (
        <div className={classes.modalLayoutHeader}>
          <h2 className={classes.modalTitle}>{title}</h2>
        </div>
      )}
      <div className={cn(classes.modalLayoutContent, contentClassNames)}>
        {children}
      </div>
    </dialog>
  );
};
