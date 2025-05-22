import { ReactNode, useCallback, useMemo, useState } from 'react';
import { ModalContext, ModalEnum } from '../../model';

const ModalContextProvider = ModalContext.Provider;

interface ModalProviderProps {
  children?: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalType, setModalType] = useState<ModalEnum | null>(null);

  const handleOpen = useCallback(
    (modal: ModalEnum) => {
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
