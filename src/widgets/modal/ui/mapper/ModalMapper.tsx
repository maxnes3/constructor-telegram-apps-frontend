import { ModalEnum, useModalContext } from '@shared/components';
import { ModalProjectExport } from '../projectExport';
import { ModalProjectDownload } from '../projectDownload';
import { ModalTemplateControll } from '../templateControll';
import { ModalViewCode } from '../viewCode';
import { ModalSignIn } from '../signIn/ModalSignIn';
import { ModalSignUp } from '../signUp';
import { ModalProjectControll } from '../projectControll';
import { FC } from 'react';
import classes from './styles.module.scss';

const MODALS_BY_TYPE_RECORD: Record<ModalEnum, FC> = {
  [ModalEnum.PROJECT_EXPORT]: () => <ModalProjectExport />,
  [ModalEnum.PROJECT_DOWNLOAD]: () => <ModalProjectDownload />,
  [ModalEnum.PROJECT_CONTROLL]: () => <ModalProjectControll />,
  [ModalEnum.TEMPLATE_CONTROLL]: () => <ModalTemplateControll />,
  [ModalEnum.VIEW_CODE]: () => <ModalViewCode />,
  [ModalEnum.SIGNIN]: () => <ModalSignIn />,
  [ModalEnum.SIGNUP]: () => <ModalSignUp />,
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
