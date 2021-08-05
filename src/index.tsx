import React from 'react';
import type { ComponentType } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Slide from '@material-ui/core/Slide';
import { ru } from 'date-fns/locale';
import { SnackbarProvider } from 'notistack';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import store from 'src/redux/index';
import './index.css';
import App from './App';

const $root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
      <SnackbarProvider
        maxSnack={2}
        autoHideDuration={2500}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        TransitionComponent={Slide as ComponentType<TransitionProps>}
      >
        <Router>
          <App />
        </Router>
      </SnackbarProvider>
    </MuiPickersUtilsProvider>
  </Provider>,
  $root
);
