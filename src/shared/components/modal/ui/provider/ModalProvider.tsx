import { ReactNode, useCallback, useMemo, useState } from 'react';
import { ModalContext, ModalType } from '../../model';

const ModalContextProvider = ModalContext.Provider;

interface ModalProviderProps {
  children?: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalType, setModalType] = useState<ModalType | null>(null);

  const handleOpen = useCallback(
    (modal: ModalType) => {
      setModalType(modal);
    },
    [setModalType],
  );

  const handleClose = useCallback(() => {
    setModalType(null);
  }, [setModalType]);

  const contextValue = useMemo(
    () => ({ modalType, open: handleOpen, close: handleClose }),
    [modalType, handleOpen, handleClose],
  );

  return (
    <ModalContextProvider value={contextValue}>{children}</ModalContextProvider>
  );
};
