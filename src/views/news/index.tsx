import React, { useEffect, useCallback, useState } from 'react';
import {
  CircularProgress,
  Box,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import NewsItem from 'src/components/newsItem';
import type { RootState } from 'src/redux/index';
import { useSelector, useDispatch } from 'src/redux/index';
import { fetchNews, setPage, resetNews } from 'src/redux/slice/news';
import { resetFilters } from 'src/redux/slice/newsFilters';
import NewsContainer from './NewsContainer/NewsContainer';
import NewsSearch from './NewsSearch/NewsSearch';
import WidgetWeather from './Widget/Widget';

const styles = makeStyles(() => ({
  settingsPepper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '20em',
  }
}));

const News = () => {
  const [pageCounter, setPageCounter] = useState(1);

  const { enqueueSnackbar } = useSnackbar();

  const classes = styles();

  const dispatch = useDispatch();
  const { articles: newsData, loading, error: requestError } = useSelector(({ news }: RootState) => news);
  const { from, to } = useSelector(({ newsFilters }: RootState) => newsFilters);

  const newsDataLength = Boolean(newsData.length);

  const getNews = async () => {
    try {
      await dispatch(fetchNews());
    } catch (error) {
      console.error(error);
      enqueueSnackbar('не удалось загрузить ', {
        variant: 'error'
      });
    }
  };

  const getNewsWithNewPage = useCallback(() => {
    console.log('before', pageCounter);
    setPageCounter((prevCount) => prevCount + 1);
  }, [pageCounter]
  );

  const goToInitialNews = () => {
    dispatch(resetNews());
    dispatch(resetFilters());
    getNews();
  };
  useEffect(
    () => {
      dispatch(setPage(pageCounter));
      getNews();
    }, [pageCounter]
  );

  return (
    <Box>
      {Boolean(!requestError) && (
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Box maxWidth="720px">
            {newsDataLength && (
              <NewsContainer
                NewsRow={NewsItem}
                newsData={newsData}
                getNews={getNewsWithNewPage}
              />)}
          </Box>
          <Box className={classes.settingsPepper}>
            <Box style={{ position: 'absolute', top: 0, left: 0 }}><WidgetWeather /></Box>
            <Box style={{ position: 'absolute', top: 350, left: 0 }}><NewsSearch /></Box>
          </Box>
        </Box>
      )}
      {(loading && !newsDataLength) && <CircularProgress />}
      {requestError && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box mb={2}>
            <Typography variant="h5" color="secondary">Запрашиваемые вами новости не найдены</Typography>
          </Box>
          <Button
            onClick={goToInitialNews}
            variant="contained"
          >
            Вернуться к поиску
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(News);
