import {
  ModalEnum,
  ModalLayout,
  useModalContext,
} from '@/shared/components/modal';
import { Button, Input } from '@/shared/components';
import { useState } from 'react';
import classes from './styles.module.scss';

export const ModalLogin = () => {
  const { open, close } = useModalContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleClose = () => {
    close();
  };

  const handleConfirm = () => {};

  const handleOpenRegisterModal = () => {
    open(ModalEnum.REGISTER);
  };

  const handleEmailChange = (newValue: string) => {
    setEmail(newValue);
  };

  const handlePasswordChange = (newValue: string) => {
    setPassword(newValue);
  };

  return (
    <ModalLayout
      onClose={handleClose}
      title="Sign In"
      contentClassNames={classes.modalLogin}
    >
      <Input
        value={email}
        placeholder="example@mail.com"
        onChange={handleEmailChange}
        customClassNames={classes.input}
      />
      <Input
        value={password}
        placeholder="password"
        type="password"
        onChange={handlePasswordChange}
        customClassNames={classes.input}
      />
      <Button
        mode="active"
        onClick={handleConfirm}
        customClassNames={classes.confirmButton}
      >
        Confirm
      </Button>
      <Button mode="transparent" onClick={handleOpenRegisterModal}>
        Don't have an account yet?
      </Button>
    </ModalLayout>
  );
};
