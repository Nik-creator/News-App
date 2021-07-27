import React, { ComponentType } from 'react';
import './App.css';
import Slide from '@material-ui/core/Slide';
import { SnackbarProvider } from 'notistack';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import renderRoutes from './routes/renderRoutes';
import { routes } from './routes/routes';

function App() {
  return (
    <div>
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        TransitionComponent={Slide as ComponentType<TransitionProps>}
      >
        {renderRoutes(routes)}
      </SnackbarProvider>
    </div>
  );
}

export default App;
