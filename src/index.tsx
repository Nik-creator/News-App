import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ru } from 'date-fns/locale';
import store from 'src/redux/index';
import './index.css';
import App from './App';

const $root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
      <Router>
        <App />
      </Router>
    </MuiPickersUtilsProvider>
  </Provider>,
  $root
);
