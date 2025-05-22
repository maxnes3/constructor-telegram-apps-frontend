import { ModalEnum, useModalContext } from '@shared/components/modal';
import { ModalProjectExport } from '../projectExport';
import { ModalProjectDownload } from '../projectDownload';
import { ModalTemplateControll } from '../templateControll';
import { ModalEditTemplate } from '../editTemplate';
import { ModalLogin } from '../login/ModalLogin';
import { ModalRegister } from '../register';
import { FC } from 'react';
import classes from './styles.module.scss';

const MODALS_BY_TYPE_RECORD: Record<ModalEnum, FC> = {
  [ModalEnum.PROJECT_EXPORT]: () => <ModalProjectExport />,
  [ModalEnum.PROJECT_DOWNLOAD]: () => <ModalProjectDownload />,
  [ModalEnum.TEMPLATE_CONTROLL]: () => <ModalTemplateControll />,
  [ModalEnum.EDIT_TEMPLATE]: () => <ModalEditTemplate />,
  [ModalEnum.LOGIN]: () => <ModalLogin />,
  [ModalEnum.REGISTER]: () => <ModalRegister />,
};

export const ModalMapper = () => {
  const { modalType } = useModalContext();

  if (modalType === null) {
    return null;
  }

  const ModalComponent = MODALS_BY_TYPE_RECORD[modalType];

  return (
    <div className={classes.modalContainer}>
      {ModalComponent ? ModalComponent({}) : null}
    </div>
  );
};
