import React, { useCallback } from 'react';
import type { FC } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  Box,
  Link
} from '@material-ui/core';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { IArticles } from 'src/types/news';
import { useDispatch } from 'src/redux/index';
import { setCurrentNews } from 'src/redux/slice/news';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 15,
    padding: 10,
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

const NewsItem: FC<IArticles> = (props) => {
  const {
    title,
    // url,
    // author,
    // content,
    description,
    publishedAt,
    // source,
    urlToImage,
  } = props;
  const dispatch = useDispatch();
  const validDate = new Date(publishedAt as string);
  const date = format(validDate, 'd MMMM yyy', { locale: ru });
  const classes = useStyles();

  // const goToNews = useCallback(
  //   () => {
  //     dispatch(setCurrentNews({ publishedAt as string });
  //   }, []
  // );
  return (
    <Card className={classes.root}>
      <Link
        color="inherit"
        style={{ textDecoration: 'none' }}
        component={RouterLink}
        to="/" // TODO сделать переход на контретную новость
      >
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
      </Link>
    </Card>
  );
};

export default NewsItem;
