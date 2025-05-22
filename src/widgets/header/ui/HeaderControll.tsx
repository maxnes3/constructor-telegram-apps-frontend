import { Button } from '@/shared/components';
import { ModalEnum, useModalContext } from '@/shared/components/modal';
import { NovatoolkitIcon } from '@/shared/assets/icons';
import { DOCS_API_URL } from '@/shared/url';
import classes from './styles.module.scss';

export const HeaderControll = () => {
  const { open } = useModalContext();

  const handleSignInButton = () => {
    open(ModalEnum.LOGIN);
  };

  const handleSignUpButton = () => {
    open(ModalEnum.REGISTER);
  };

  const handleOpenApiDocs = () => {
    window.open(DOCS_API_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className={classes.headerControll}>
      <h3 className={classes.novatoolkit}>
        <NovatoolkitIcon className={classes.icon} /> Novatoolkit
      </h3>
      <div className={classes.buttons}>
        <Button
          mode="active"
          onClick={handleSignInButton}
          customClassNames={classes.signInButton}
        >
          Sign In
        </Button>
        <Button
          mode="transparent"
          onClick={handleSignUpButton}
          customClassNames={classes.signUpButton}
        >
          Sign Up
        </Button>
        <Button mode="transparent" onClick={handleOpenApiDocs}>
          Api Docs
        </Button>
      </div>
    </header>
  );
};
