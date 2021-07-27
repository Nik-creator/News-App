import React from 'react';
import type { FC } from 'react';
import {
  makeStyles,
  Box,
  FormControlLabel,
  Switch,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import { useSelector, useDispatch } from 'src/redux/index';
import { resetNews } from 'src/redux/slice/news';
import { setPageSize, setFontSize } from 'src/redux/slice/settings';
import type { RootState } from 'src/redux/index';
import menuSuggestion from './menuSuggestion';

const useStyles = makeStyles(() => ({
  select: {
    width: '30%',
    height: 38,
    marginTop: 15
  }
}));

const SettingsCard: FC = () => {
  const { pageSize, fontSize } = useSelector(({ settings }: RootState) => settings);
  const dispatch = useDispatch();
  const classes = useStyles();

  const themeName = 'Темная';

  const changePage = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { target: { value } } = event;
    dispatch(setPageSize(value as number));
    dispatch(resetNews());
  };

  const changeFontSize = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { target: { value } } = event;
    dispatch(setFontSize(value as number));
  };

  return (
    <Box p={2}>
      <Box>
        <div>
          <InputLabel>Выберете минимальное колличество новостей на странице</InputLabel>
          <Select
            variant="outlined"
            className={classes.select}
            onChange={changePage}
            value={pageSize}
          >
            {menuSuggestion.map(({ itemNumber }) => (
              <MenuItem key={itemNumber} value={itemNumber}>{itemNumber}</MenuItem>
              )
            )}
          </Select>
        </div>
      </Box>
      <Box mt={2}>
        <div>
          <InputLabel>Выберете размер шрифта</InputLabel>
          <Select
            variant="outlined"
            className={classes.select}
            onChange={changeFontSize}
            value={fontSize}
          >
            <MenuItem value={16}>16px</MenuItem>
            <MenuItem value={18}>18px</MenuItem>
          </Select>
        </div>
      </Box>
      <Box mt={2}>
        <div>
          <InputLabel>Выберете цвет темы</InputLabel>
          <FormControlLabel
            control={
              <Switch
                name="checkedB"
                color="primary"
              />
            }
            labelPlacement="bottom"
            label={themeName}
          />
        </div>
      </Box>
    </Box>
  );
};

export default SettingsCard;
