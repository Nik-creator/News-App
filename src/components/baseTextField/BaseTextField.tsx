import React from 'react';
import type { FC } from 'react';
import { TextField } from '@material-ui/core';

interface OwnProps {
  placeholder: string;
  value: any;
  changeValue: (value: any) => void;
}

const BaseTextField: FC<OwnProps> = ({ changeValue, value, placeholder, ...ownProps }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(event.target.value);
  };

  return (
    <TextField
      {...ownProps}
      variant="outlined"
      size="small"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default BaseTextField;
