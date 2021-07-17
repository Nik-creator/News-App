import React from 'react';
import type { FC } from 'react';
import {
  makeStyles,
  Box,
  Card,
  TextField,
  Avatar,
  Typography
} from '@material-ui/core';

const ProfileCard: FC = () => {
  const mockedName = 'Mike Andrew';
  const mockedProfession = 'Frontend developer';
  const mockerMoreInformation = 'Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...';

  return (
    <Box p={2}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Avatar>H</Avatar>
        </Box>
        <Box mt={2}>
          <Typography>{mockedName}</Typography>
        </Box>
        <Box mt={2}>
          <Typography>{mockedProfession}</Typography>
        </Box>
        <Box mt={3}>
          <Typography>{mockerMoreInformation}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default ProfileCard;
