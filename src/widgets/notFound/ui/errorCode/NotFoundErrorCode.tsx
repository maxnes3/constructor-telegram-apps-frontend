import classes from './styles.module.scss';

export const NotFoundErrorCode = () => {
  return (
    <div className={classes.notFoundErrorCode}>
      <h1 className={classes.code}>404</h1>
      <span className={classes.description}>Page not found</span>
    </div>
  );
};
