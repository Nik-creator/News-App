import React, { useMemo, useEffect } from 'react';
import type { FC } from 'react';
import { RootState, useSelector } from 'src/redux/index';
import {
  Box,
  Card,
  CircularProgress,
  makeStyles,
  Theme,
} from '@material-ui/core';
import WeatherView from './WeatherView/WeatherView';

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
  const { loading, data } = useSelector(({ weather }: RootState) => weather);
  const classes = styles();
  return (
    <Card
      className={classes.root}
    >
      {loading ? <Box height="100%" display="flex" justifyContent="center" alignItems="center"><CircularProgress /></Box> : <WeatherView data={data} />}
    </Card>
  );
};

export default React.memo(WidgetWeather);
