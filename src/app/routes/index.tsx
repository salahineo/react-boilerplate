import { createBrowserRouter } from 'react-router-dom';
import App from '@/app/App';
import { UsersPage } from '@/features/users/pages/UsersPage';
import { NotFound } from '@/shared/components/fallback/NotFoundPage.tsx';
import { ErrorPage } from '@/shared/components/fallback/ErrorPage.tsx';

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/users',
        element: <UsersPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
