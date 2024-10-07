import { LayoutRouteProps } from 'react-router-dom';
import styles from './layout.module.scss';

const Layout: React.FC<LayoutRouteProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
