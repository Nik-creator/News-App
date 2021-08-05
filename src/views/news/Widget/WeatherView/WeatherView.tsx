import React from 'react';
import type { FC } from 'react';
import { Weather } from 'src/types/weather';
import { Box, Typography } from '@material-ui/core';

interface OwnProps {
  data: Weather
}

const WeatherView: FC<OwnProps> = ({ data }) => {
  const { current, forecast } = data;

  return (
    <Box>
      <Box>
        <Typography variant="h6">
          Погода сейчас:
          {' '}
          {current?.temp_c}
          &nbsp;C
        </Typography>
      </Box>
    </Box>
  );
};

export default WeatherView;
