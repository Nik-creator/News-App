import React from 'react';
import type { FC } from 'react';
import {
  makeStyles,
  Box,
  Card,
  TextField
} from '@material-ui/core';
import SettingsCard from './SettingsCard/index';
import ProfileCard from './ProfileCard/index';

const useStyles = makeStyles(() => ({
  settingsCard: {
    flex: '0 0 66.66667%',
    maxWidth: '66.66667%',
  },
  profileCard: {
    flex: '0 0 33.33333%',
    maxWidth: '33.33333%',
  },
  card: {
    padding: 5
  }
}));

const Settings: FC = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <Box
        component="div"
        paddingRight="15px"
        className={classes.settingsCard}
      >
        <Card className={classes.card}>
          <SettingsCard />
        </Card>
      </Box>
      <Box
        component="div"
        paddingLeft="15px"
        className={classes.profileCard}
      >
        <Card>
          <ProfileCard />
        </Card>
      </Box>
    </Box>
);
};

export default Settings;
