import { RoutesPath } from '@shared/types';
import { ConstructorPage } from '@pages/constructor';
import { HomePage } from '@pages/home';

export const routes = [
  {
    key: RoutesPath.HOME,
    path: RoutesPath.HOME,
    element: <HomePage />,
  },
  {
    key: RoutesPath.CONSTRUCTOR,
    path: RoutesPath.CONSTRUCTOR,
    element: <ConstructorPage />,
  },
];
