import React from 'react';
import type { FC } from 'react';
import {
  Box,
  Card,
  makeStyles,
  Theme
} from '@material-ui/core';

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
  const classes = styles();
  return (
    <Card
      className={classes.root}
    >
      Тут будет погода
    </Card>
  );
};

export default WidgetWeather;
