import React from 'react';
import type { FC } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  Box
} from '@material-ui/core';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { IArticles } from 'src/types/news';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 15,
    padding: 10
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 3 auto',
  },
  content: {
    flex: '1 3 auto',
  },
  imgWrapper: {
    width: 200,
  },
  img: {
    width: 200
  }
}));

const NewsItem: FC<IArticles> = ({
  title,
  // url,
  // author,
  // content,
  description,
  publishedAt,
  // source,
  urlToImage,
}) => {
  const validDate = new Date(publishedAt);
  const date = format(validDate, 'd MMMM yyy', { locale: ru });
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box display="flex">
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1">
              {description}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          image={urlToImage}
          title={title}
          className={classes.img}
        />
      </Box>
      <Box>
        <Typography>
          {date}
        </Typography>
      </Box>
    </Card>
  );
};

export default NewsItem;
