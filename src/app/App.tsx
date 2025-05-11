import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { ModalProvider } from '@/shared/components/modal';
import { ModalMapper } from '@/widgets/modal';
import './app.module.scss';

const App: FC = () => {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </BrowserRouter>
      <ModalMapper />
    </ModalProvider>
  );
};

export default App;
