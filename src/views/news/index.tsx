import React, {
  useEffect,
  useCallback,
  useState,
  useMemo
} from 'react';
import {
  CircularProgress,
  Box,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';
import qs from 'querystringify';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import NewsItem from 'src/components/newsItem';
import type { RootState } from 'src/redux/index';
import { useSelector, useDispatch } from 'src/redux/index';
import { fetchNews, setPage, resetNews } from 'src/redux/slice/news';
import { resetFilters, setFilters } from 'src/redux/slice/newsFilters';
import mapStateInParams from 'src/helpers/getQueryString';
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

  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();

  const classes = styles();

  const dispatch = useDispatch();
  const { articles: newsData, loading, error: requestError } = useSelector(({ news }: RootState) => news);
  const filters = useSelector(({ newsFilters }: RootState) => newsFilters);
  const { currentPage: NumbreCurrentPage } = useSelector(({ news }: RootState) => news);
  const { pageSize: NumberPageSize } = useSelector(({ settings }: RootState) => settings);

  const createSearchString = useMemo(
    () => {
      const pageSize = String(NumberPageSize);
      const currentPage = String(NumbreCurrentPage);
      const searchString: string[] = mapStateInParams({ ...filters, pageSize, currentPage });
      return `${searchString.length ? '?' : ''}${searchString.join('&')}`;
    },
    [filters, NumbreCurrentPage, NumberPageSize]
  );

  const checkFilters = (obj: object) => {
    Object.entries(obj).forEach(
      ([key, val]) => {
        if (key === 'to') {
          dispatch(setFilters({ to: val }));
        }
        if (key === 'from') {
          dispatch(setFilters({ from: val }));
        }
        if (key === 'sortBy') {
          dispatch(setFilters({ sortBy: val }));
        }
      }
    );
  };

  useEffect(
    () => {
      const { search } = history.location;
      const string = qs.parse(search);
      checkFilters(string);
    }, []
  );

  useEffect(
    () => {
      history.push({
        search: createSearchString
      });
    }, [createSearchString]
  );

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
