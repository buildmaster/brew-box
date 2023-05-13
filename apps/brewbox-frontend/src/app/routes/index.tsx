import { Route, RouteObject, Routes } from 'react-router-dom';
import { AppLayout } from '../app-layout';
import { DashboardPage } from '../dashboard-page/dashboard-page';
import VesselTable from '../vessel-table/vessel-table';
export const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'vessels',
        element: <VesselTable />,
      },
      {
        path: 'brews',
        element: <DashboardPage />,
      },
      {
        path: 'pumps',
        element: <DashboardPage />,
      },
    ],
  },
];
