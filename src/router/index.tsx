import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import { laboratoryRoutes } from './laboratory';
import App from '@/App';

// lazy load pages
const HomePage = lazy(() => import('@/features/home'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      ...laboratoryRoutes,
    ],
  },
]);
