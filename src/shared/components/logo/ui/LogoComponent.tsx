import { NovatoolkitIcon } from '@/shared/assets/icons';
import classes from './styles.module.scss';

export const LogoComponent = () => {
  return (
    <h3 className={classes.logo}>
      <NovatoolkitIcon className={classes.favicon} /> Novatoolkit
    </h3>
  );
};
