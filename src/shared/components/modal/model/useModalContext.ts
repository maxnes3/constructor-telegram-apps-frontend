import { createContext, useContext } from 'react';

export enum ModalEnum {
  PROJECT_EXPORT = 'PROJECT_EXPORT',
  PROJECT_DOWNLOAD = 'PROJECT_DOWNLOAD',
  PROJECT_CONTROLL = 'PROJECT_CONTROLL',
  TEMPLATE_CONTROLL = 'TEMPLATE_CONTROLL',
  VIEW_CODE = 'VIEW_CODE',
  SIGNIN = 'SIGNIN',
  SIGNUP = 'SIGNUP',
}

interface Context {
  modalType: ModalEnum | null;
  open: (modal: ModalEnum) => void;
  close: () => void;
}

export const ModalContext = createContext({} as Context);

export const useModalContext = () => useContext(ModalContext);
