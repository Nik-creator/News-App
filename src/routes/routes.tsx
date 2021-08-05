import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import Dashboard from 'src/layouts/Dashboard/Dashboard';

export type Routes = {
  exact?: boolean;
  layout?: any;
  path?: string | string[];
  component?: any;
  routes?: Routes;
}[];

export const routes: Routes = [
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/notFound/index')),
  },
  {
    exact: true,
    path: '/login',
    component: lazy(() => import('src/views/auth/index')),
  },
  {
    path: '/',
    layout: Dashboard,
    routes: [
      {
        exact: true,
        path: '/',
        component: () => <Redirect to="/news" />
      },
      {
        exact: true,
        path: '/news',
        component: lazy(() => import('src/views/news/index')),
      },
      {
        exact: true,
        path: '/news/:newsId',
        component: lazy(() => import('src/views/news/CurrentNews/index')),
      },
      {
        exact: true,
        path: '/settings',
        component: lazy(() => import('src/views/settings/index')),
      },
      {
        exact: true,
        path: '/help',
        component: lazy(() => import('src/views/help/index'))
      },
      {
        exact: true,
        path: '/about',
        component: lazy(() => import('src/views/about/index')),
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  }
];
