import React, { useEffect, useCallback, useState } from 'react';
import {
  CircularProgress,
  Box,
  Typography
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import NewsItem from 'src/components/newsItem';
import type { RootState } from 'src/redux/index';
import { useSelector, useDispatch } from 'src/redux/index';
import { fetchNews, setPage } from 'src/redux/slice/news';
import NewsContainer from './NewsContainer/NewsContainer';

const News = () => {
  const [pageCounter, setPageCounter] = useState(1);

  const { enqueueSnackbar } = useSnackbar();

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
    console.log('after', pageCounter);
  }, [pageCounter]
  );

  useEffect(
    () => {
      dispatch(setPage(pageCounter));
      getNews();
    }, [pageCounter, from, to]
  );

  return (
    <Box>
      {(!loading || newsDataLength) && (
      <NewsContainer
        NewsRow={NewsItem}
        newsData={newsData}
        getNews={getNewsWithNewPage}
      />)}
      {(loading && !newsDataLength) && <CircularProgress />}
      {requestError && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Typography variant="h4" color="secondary">Нет данных</Typography>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(News);
