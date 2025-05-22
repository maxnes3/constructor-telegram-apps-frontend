import { Button } from '@/shared/components';
import classes from './styles.module.scss';
import { GithubIcon, NovatoolkitIcon } from '@/shared/assets/icons';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '@/shared/types';
import { GITHUB_NOVATOOLKIT_URL } from '@/shared/url';

export const HomeGetStarted = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate(RoutesPath.CONSTRUCTOR);
  };

  const handleGitHubClick = () => {
    window.open(GITHUB_NOVATOOLKIT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={classes.homeGetStarted}>
      <NovatoolkitIcon />
      <h1 className={classes.title}>
        The Build Tool <br />
        for the Telegram app
      </h1>
      <div className={classes.buttons}>
        <Button
          mode="active"
          onClick={handleGetStartedClick}
          customClassNames={classes.getStartedButton}
        >
          Get started
        </Button>
        <Button
          mode="transparent"
          onClick={handleGitHubClick}
          customClassNames={classes.githubButton}
        >
          <GithubIcon className={classes.githubIcon} />
          GitHub
        </Button>
      </div>
    </div>
  );
};
