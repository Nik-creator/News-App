import React from 'react';
import './App.css';
import { SnackbarProvider } from 'notistack';
import Dashboard from './layouts/Dashboard/Dashboard';
import renderRoutes from './routes/renderRoutes';
import { routes } from './routes/routes';

function App() {
  return (
    <div>
      <SnackbarProvider
        dense
        maxSnack={5}
      >
        {/* <Dashboard /> */}
        {renderRoutes(routes)}
      </SnackbarProvider>
    </div>
  );
}

export default App;
