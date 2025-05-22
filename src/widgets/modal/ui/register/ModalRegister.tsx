import {
  ModalEnum,
  ModalLayout,
  useModalContext,
} from '@/shared/components/modal';
import { Button, Input } from '@/shared/components';
import classes from './styles.module.scss';
import { useState } from 'react';

export const ModalRegister = () => {
  const { open, close } = useModalContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  const handleBack = () => {
    open(ModalEnum.LOGIN);
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

  return (
    <ModalLayout
      contentClassNames={classes.modalRegister}
      onBack={handleBack}
      onClose={handleClose}
      title="Sign Up"
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
      <Button mode="active" customClassNames={classes.confirmButton}>
        Confirm
      </Button>
    </ModalLayout>
  );
};
