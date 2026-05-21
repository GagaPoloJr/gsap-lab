import { lazy } from 'react';
import { type RouteObject } from 'react-router';

// lazy load pages
const MotionFundamentalPage = lazy(
  () => import('@/features/laboratory/pages/motion-fundamental-page')
);

export const laboratoryRoutes: RouteObject[] = [
  {
    path: '/laboratory',
    children: [
      {
        path: 'motion-fundamental',
        element: <MotionFundamentalPage />,
      },
    ],
  },
];
