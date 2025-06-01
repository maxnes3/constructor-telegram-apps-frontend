import { ModalEnum, useModalContext, Button } from '@/shared/components';
import { AccountIcon } from '@/shared/assets/icons';
import { DOCS_API_URL } from '@/shared/url';
import { useAuthQuery } from '@/entities/auth';
import classes from './styles.module.scss';
import { Logo } from '@/shared/components/logo';

export const HeaderControll = () => {
  const { open } = useModalContext();
  const { account, isAuthenticated } = useAuthQuery();

  console.log(account);

  const handleSignInButton = () => {
    open(ModalEnum.SIGNIN);
  };

  const handleSignUpButton = () => {
    open(ModalEnum.SIGNUP);
  };

  const handleOpenApiDocs = () => {
    window.open(DOCS_API_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className={classes.headerControll}>
      <Logo />
      <div className={classes.buttons}>
        {isAuthenticated ? (
          <Button mode="transparent" customClassNames={classes.accountButton}>
            <AccountIcon />
            <span>{account?.email}</span>
          </Button>
        ) : (
          <>
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
          </>
        )}
        <Button mode="transparent" onClick={handleOpenApiDocs}>
          Api Docs
        </Button>
      </div>
    </header>
  );
};
