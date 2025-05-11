import { createContext, useContext } from 'react';

export enum ModalEnum {
  PROJECT_EXPORT = 'PROJECT_EXPORT',
  PROJECT_DOWNLOAD = 'PROJECT_DOWNLOAD',
}

interface Context {
  modalType: ModalEnum | null;
  open: (modal: ModalEnum) => void;
  close: () => void;
}

export const ModalContext = createContext({} as Context);

export const useModalContext = () => useContext(ModalContext);
