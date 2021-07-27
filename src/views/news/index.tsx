import React, { useEffect, useCallback, useState } from 'react';
import {
  CircularProgress,
  Box,
  Typography
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import NewsContainer from 'src/components/news/NewsContainer';
import NewsItem from 'src/components/newsItem';
import type { RootState } from 'src/redux/index';
import { useSelector, useDispatch } from 'src/redux/index';
import { fetchNews, setPage } from 'src/redux/slice/news';

const News = () => {
  const [pageCounter, setPageCounter] = useState(1);

  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const { articles: newsData, loading, error: requestError } = useSelector(({ news }: RootState) => news);

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
    setPageCounter((prevCount) => prevCount + 1);
    dispatch(setPage(pageCounter));
    getNews();
  }, [pageCounter]
  );

  useEffect(
    () => {
      getNews();
    }, []
  );
  return (
    <Box className="HERE">
      {(!loading && Boolean(newsData.length)) && (
      <NewsContainer
        NewsRow={NewsItem}
        newsData={newsData}
        getNews={getNewsWithNewPage}
      />)}
      {loading && <CircularProgress />}
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
