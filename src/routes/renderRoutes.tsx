import React, { Fragment, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoadingScreen from 'src/components/loadingScreen/LoadingScreen';
import type { Routes } from './routes';

const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map(
        (route) => {
          const Component = route.component;
          const Layout = route.layout || Fragment;
          return (
            <Route
              key={`${route.path}`}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Layout>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                </Layout>
              )}
            />
        );
}
      )}
    </Switch>
  </Suspense>
);

export default renderRoutes;
