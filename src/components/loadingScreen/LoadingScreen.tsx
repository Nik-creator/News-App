import React, { useEffect } from 'react';
import type { FC } from 'react';
import NProgress from 'nprogress';
import { LinearProgress, Box } from '@material-ui/core';

const LoadingScreen: FC = (): JSX.Element => {
  useEffect(
    () => {
      NProgress.start();

      return () => {
        NProgress.done();
      };
    },
    []
  );
  return (
    <div>
      <Box width={400}><LinearProgress /></Box>
    </div>
  );
};

export default LoadingScreen;
