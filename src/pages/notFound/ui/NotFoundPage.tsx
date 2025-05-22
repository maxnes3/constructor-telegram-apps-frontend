import { NotFoundBackButton, NotFoundErrorCode } from '@/widgets/notFound';
import classes from './styles.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={classes.notFoundPage}>
      <NotFoundErrorCode />
      <NotFoundBackButton />
    </div>
  );
};
