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
import { NovatoolkitIcon } from '@/shared/assets/icons';
import classes from './styles.module.scss';

export const ModalSignUp = () => {
  const { open, close } = useModalContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const { signUp } = useAuthQuery();

  const handleBack = () => {
    open(ModalEnum.SIGNIN);
  };

  const handleClose = () => {
    close();
  };

  const handleEmailChange = (newValue: string) => {
    setEmail(newValue);
  };

  const handlePasswordChange = (newValue: string) => {
    setPassword(newValue);
  };

  const handleRepeatPasswordChange = (newValue: string) => {
    setRepeatPassword(newValue);
  };

  const handleConfirm = async () => {
    if (password !== repeatPassword) {
      return;
    }
    await signUp({ email, password } as AuthRequestType);
    handleClose();
  };

  const signUpTitle = (
    <span className={classes.title}>
      <NovatoolkitIcon className={classes.icon} />
      Sign Up
    </span>
  );

  return (
    <ModalLayout
      onBack={handleBack}
      onClose={handleClose}
      title={signUpTitle}
      contentClassNames={classes.modalSignUp}
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
      <Input
        value={repeatPassword}
        placeholder="repeat password"
        type="password"
        onChange={handleRepeatPasswordChange}
        customClassNames={classes.input}
      />
      <Button
        mode="active"
        onClick={handleConfirm}
        customClassNames={classes.confirmButton}
      >
        Confirm
      </Button>
    </ModalLayout>
  );
};
