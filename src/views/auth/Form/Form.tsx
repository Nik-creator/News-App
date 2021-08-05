import React from 'react';
import type { FC } from 'react';
import {
  TextField,
  Box,
  Button,
  makeStyles
} from '@material-ui/core';

interface OwnProps {
  emailValue: string;
  changeEmailValue: (emailValue: string) => void;
  passwordValue: string;
  changePasswordValue: (passwordValue: string) => void;
  onSubmit: (data?: any) => void;
}

const styles = makeStyles(() => ({
  form: {
    padding: 20,
    width: 300,
    border: '1px solid #e2ebf0',
    borderRadius: 5,
    background: '#fff',
  }
}));

const Form: FC<OwnProps> = ({
  changeEmailValue,
  changePasswordValue,
  emailValue,
  passwordValue,
  onSubmit
 }) => {
   const classes = styles();

   const handleChangeEmailValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeEmailValue(event.target.value);
   };

   const handleChangePasswordValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    changePasswordValue(event.target.value);
   };

   const handleSubmit = () => {
    onSubmit();
   };

   return (
     <form className={classes.form}>
       <Box mt={2}>
         <TextField
           label="email"
           value={emailValue}
           onChange={handleChangeEmailValue}
           fullWidth
         />
       </Box>
       <Box mt={2}>
         <TextField
           fullWidth
           label="password"
           value={passwordValue}
           onChange={handleChangePasswordValue}
         />
       </Box>
       <Box mt={4}>
         <Button
           fullWidth
           variant="contained"
           onClick={handleSubmit}
         >
           Login
         </Button>
       </Box>
     </form>
  );
};

export default Form;
