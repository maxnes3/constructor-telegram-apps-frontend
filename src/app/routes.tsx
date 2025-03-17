import { RoutesPath } from '@shared/types';
import { ConstructorPage } from '@pages/constructor';
import { HomePage } from '@pages/home';

export const routes = [
  {
    path: RoutesPath.HOME,
    element: <HomePage />,
  },
  {
    path: RoutesPath.CONSTRUCTOR,
    element: <ConstructorPage />,
  },
];
