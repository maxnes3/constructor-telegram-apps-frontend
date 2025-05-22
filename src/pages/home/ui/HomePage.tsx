import { HeaderControll } from '@/widgets/header';
import { HomeGetStarted, HomeTechStack } from '@/widgets/home';
import classes from './styles.module.scss';

export const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <HeaderControll />
      <HomeGetStarted />
      <HomeTechStack />
    </div>
  );
};
