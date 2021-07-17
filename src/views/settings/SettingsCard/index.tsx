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
import menuSuggestion from './menuSuggestion';

const useStyles = makeStyles(() => ({
  select: {
    width: '30%',
    height: 38,
    marginTop: 15
  }
}));

const SettingsCard: FC = () => {
  const classes = useStyles();

  const themeName = 'Темная';

  return (
    <Box p={2}>
      <Box>
        <div>
          <InputLabel>Выберете минимальное колличество новостей на странице</InputLabel>
          <Select variant="outlined" className={classes.select}>
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
          <Select variant="outlined" className={classes.select}>
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
