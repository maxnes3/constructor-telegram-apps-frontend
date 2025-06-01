import {
  ModalEnum,
  ModalLayout,
  useModalContext,
  Button,
  Input,
} from '@/shared/components';
import { useState } from 'react';
import { useAuthQuery } from '@/entities/auth';
import { AuthRequestType } from '@/shared/types';
import classes from './styles.module.scss';
import { NovatoolkitIcon } from '@/shared/assets/icons';

export const ModalSignIn = () => {
  const { open, close } = useModalContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn } = useAuthQuery();

  const handleClose = () => {
    close();
  };

  const handleOpenRegisterModal = () => {
    open(ModalEnum.SIGNUP);
  };

  const handleEmailChange = (newValue: string) => {
    setEmail(newValue);
  };

  const handlePasswordChange = (newValue: string) => {
    setPassword(newValue);
  };

  const handleConfirm = async () => {
    await signIn({ email, password } as AuthRequestType);
    handleClose();
  };

  const signInTitle = (
    <span className={classes.title}>
      <NovatoolkitIcon className={classes.icon} />
      Sign In
    </span>
  );

  return (
    <ModalLayout
      onClose={handleClose}
      title={signInTitle}
      contentClassNames={classes.modalSignIn}
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
