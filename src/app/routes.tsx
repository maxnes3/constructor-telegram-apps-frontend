import { ConstructorPage } from '@pages/constructor';
import { HomePage } from '@pages/home';

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/constructor', element: <ConstructorPage /> },
];
