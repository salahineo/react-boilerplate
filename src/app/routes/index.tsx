import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { UsersPage } from '../../features/users/pages/UsersPage';
import { NotFound } from '../../shared/components/fallback/NotFoundPage.tsx';
import { ErrorPage } from '../../shared/components/fallback/ErrorPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/users',
    element: <UsersPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
