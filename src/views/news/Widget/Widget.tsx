import React, { useMemo, useEffect } from 'react';
import type { FC } from 'react';
import {
  Box,
  Card,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import useLocation from 'src/hooks/useLocation';
import { useDispatch } from 'src/redux/index';
import { fetchWeather } from 'src/redux/slice/weather';

const styles = makeStyles((theme: Theme) => ({
  root: {
    width: 320,
    height: 300,
    position: 'fixed',
    border: '1px solid #000',
    borderRadius: 4,
    padding: '10px 15px',
    background: theme.palette.action.hover
  }
}));

const WidgetWeather: FC = () => {
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

  const classes = styles();
  return (
    <Card
      className={classes.root}
    >
      Тут будет погода
    </Card>
  );
};

export default React.memo(WidgetWeather);
