import React from 'react';
import './App.css';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'src/redux/index';
import useLocation from 'src/hooks/useLocation';
import { fetchWeather } from 'src/redux/slice/weather';
import { routes } from './routes/routes';
import renderRoutes from './routes/renderRoutes';

function App() {
  const { access, latitude, longitude, error } = useLocation();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const locationReady: boolean = Boolean(latitude) && Boolean(longitude);

  if (access && locationReady) {
    (async () => {
      try {
        const queryStringLocation = `${latitude},${longitude}`;
        dispatch(fetchWeather(queryStringLocation));
        enqueueSnackbar('Используется геолокация', {
          variant: 'success'
        });
      } catch (er) {
        console.error(er);
      }
    })();
  } else {
    dispatch(fetchWeather('auto:ip'));
    enqueueSnackbar('Вы отключили использование геолокации. Это может нарушить использование виджета погоды', {
      variant: 'warning'
    });
  }
  return (
    <>
      {renderRoutes(routes)}
    </>
  );
}

export default App;
