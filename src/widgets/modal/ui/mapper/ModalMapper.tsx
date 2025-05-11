import { ModalEnum, useModalContext } from '@shared/components/modal';
import { ModalProjectExport } from '../projectExport';
import { ModalProjectDownload } from '../projectDownload';
import classes from './styles.module.scss';

const MODALS_BY_TYPE_RECORD: Record<ModalEnum, () => JSX.Element> = {
  [ModalEnum.PROJECT_EXPORT]: () => <ModalProjectExport />,
  [ModalEnum.PROJECT_DOWNLOAD]: () => <ModalProjectDownload />,
};

export const ModalMapper = () => {
  const { modalType } = useModalContext();

  const ModalComponent = MODALS_BY_TYPE_RECORD[modalType as ModalEnum];

  if (modalType === null) {
    return null;
  }

  return (
    <div className={classes.modalContainer}>
      {ModalComponent ? ModalComponent() : null}
    </div>
  );
};
