import React, { useState } from 'react';
import type { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Form from './Form/Form';

const styles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'inherit',
    width: '100%',
    backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'
  }
}));

const Auth: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [passport, setPassport] = useState<string>('');

  const classes = styles();

  const submit = () => {
    console.log(email, passport);
  };

  return (
    <Box className={classes.root}>
      <Form
        emailValue={email}
        changeEmailValue={setEmail}
        passwordValue={passport}
        changePasswordValue={setPassport}
        onSubmit={submit}
      />
    </Box>
  );
};

export default Auth;
