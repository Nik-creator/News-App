import React from 'react';
import type { FC } from 'react';
import {
  Box,
  Container,
  Typography
} from '@material-ui/core';
import NotFoundIcon from 'src/components/notFoundIcon/NotFoundIcon';

const NotFound: FC = () => (
  <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
    <Box>
      <Typography component="h1">
        Упссс.. запрашиваемая вами страница не найдена
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        mt={5}
      >
        <NotFoundIcon />
      </Box>
    </Box>
  </Container>
  );

export default NotFound;
