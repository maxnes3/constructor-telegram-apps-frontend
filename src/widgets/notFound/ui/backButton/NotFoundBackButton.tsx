import { Button } from '@/shared/components';
import { useNavigate } from 'react-router-dom';
import classes from './styles.module.scss';
import { BackIcon } from '@/shared/assets/icons';

export const NotFoundBackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Button
      mode="active"
      onClick={handleClick}
      customClassNames={classes.notFoundBackButton}
    >
      <BackIcon />
      Back
    </Button>
  );
};
