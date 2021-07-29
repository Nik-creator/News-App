import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import {
  Box,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'src/redux/index';
import type { RootState } from 'src/redux/index';
import { fetchNews } from 'src/redux/slice/news';
import { setFilters } from 'src/redux/slice/newsFilters';

const styles = makeStyles(() => ({
  root: {
    border: '1px solid #000',
    borderRadius: 4,
    padding: '10px 15px',
    position: 'fixed',
    right: 190
  },
  button: {
    width: 140
  },
  typography: {
    paddingBottom: 15,
    textAlign: 'center'
  }
}));

const NewsSearch: FC = () => {
  const { from, to } = useSelector(({ newsFilters }: RootState) => newsFilters);

  const dispatch = useDispatch();
  console.log(to);
  const classes = styles();
  const { enqueueSnackbar } = useSnackbar();

  const handleChangeDateEnd = (filterDate: any) => {
    dispatch(setFilters({ to: filterDate }));
  };

  const handleChangeDateStart = (filterDate: any) => {
    console.log('filterDate', filterDate);
    dispatch(setFilters({ from: filterDate }));
  };

  const baseDatePickerProps = {
    invalidDateMessage: 'Неправильный формат даты',
    autoOk: true,
    disableFuture: true,
    format: 'd MMMM yyyy',
    disableToolbar: true
  };

  return (
    <Box
      width="320px"
      height="400px"
      className={classes.root}
    >
      <Typography variant="h6">Поиск по дате</Typography>
      <Box
        display="flex"
        justifyContent="space-between"
      >
        <Box mt={2}>
          <DatePicker
            value={from}
            onChange={handleChangeDateStart}
            {...baseDatePickerProps}
            variant="inline"
            label="С"
            inputVariant="outlined"
            className={classes.button}
          />
        </Box>
        <Box mt={2}>
          <DatePicker
            value={to}
            onChange={handleChangeDateEnd}
            {...baseDatePickerProps}
            variant="inline"
            label="По"
            inputVariant="outlined"
            className={classes.button}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NewsSearch;
