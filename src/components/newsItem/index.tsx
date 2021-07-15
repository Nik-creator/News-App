import React from 'react';
import type { FC } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles
} from '@material-ui/core';
import { IArticles } from 'src/types/News';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginBottom: 10,
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
  // publishedAt,
  // source,
  urlToImage,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
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
    </Card>
  );
};

export default NewsItem;
