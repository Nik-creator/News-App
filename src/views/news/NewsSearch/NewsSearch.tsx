import React, { useState, useEffect, useMemo } from 'react';
import type { FC } from 'react';
import {
  Box,
  TextField,
  Typography,
  makeStyles,
  Chip,
  Theme
} from '@material-ui/core';
import { format } from 'date-fns';
import { DatePicker } from '@material-ui/pickers';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'src/redux/index';
import type { RootState } from 'src/redux/index';
import { fetchNews, resetNews } from 'src/redux/slice/news';
import { setFilters } from 'src/redux/slice/newsFilters';
import type { SortByType } from 'src/types/settings';
import { convectorChipsName, convectorChipsNameIntoEnglish } from 'src/helpers/convectorChipsName';
import BaseTextField from 'src/components/baseTextField/BaseTextField';

const styles = makeStyles((theme: Theme) => ({
  root: {
    width: 320,
    height: 350,
    position: 'fixed',
    border: '1px solid #000',
    borderRadius: 4,
    padding: '10px 15px',
    background: theme.palette.common.white
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
  const { from, to, sortBy, qInTitle } = useSelector(({ newsFilters }: RootState) => newsFilters);
  const [chips] = useState<SortByType[]>(['popularity', 'publishedAt', 'relevancy']);
  const [chosenChips, setChosenChips] = useState<SortByType | undefined>(sortBy);
  const [value, setValue] = useState<any>();

  const dispatch = useDispatch();
  const classes = styles();
  const { enqueueSnackbar } = useSnackbar();

  const handleChangeDateEnd = (filterDate: any) => {
    dispatch(setFilters({ to: format(filterDate, 'yyyy-MM-dd') }));
    dispatch(resetNews());
    dispatch(fetchNews());
  };

  const handleChangeDateStart = (filterDate: any) => {
    dispatch(setFilters({ from: format(filterDate, 'yyyy-MM-dd') }));
    dispatch(resetNews());
    dispatch(fetchNews());
  };
  const chooseChips = (e: any) => {
    const EngName = convectorChipsNameIntoEnglish(e.target.innerText);
    dispatch(setFilters({ sortBy: EngName as SortByType }));
    setChosenChips(EngName as SortByType);
    dispatch(resetNews());
    dispatch(fetchNews());
  };

  const baseDatePickerProps = {
    invalidDateMessage: 'Неправильный формат даты',
    autoOk: true,
    disableFuture: true,
    format: 'd MMMM yyyy',
    disableToolbar: true
  };

  const renderChips: React.ReactNode = useMemo(
    () => chips.map((chipName) => (
      <Box m={2} key={chipName}>
        <Chip
          label={convectorChipsName(chipName)}
          size="medium"
          clickable
          onClick={(n) => chooseChips(n)}
          color="primary"
          variant={chosenChips === chipName ? 'default' : 'outlined'} // TODO тут баг с отображением выбранного значения. Запрос идет правильно. Верстку доработать
        />
      </Box>
      )), [chosenChips, sortBy]
  );

  return (
    <Box
      className={classes.root}
    >
      <Typography variant="h6">Поиск по дате</Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        mb={3}
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
      <Typography variant="h6">Сортировка</Typography>
      <Box mb={3}>
        {renderChips}
      </Box>
    </Box>
  );
};

export default NewsSearch;
