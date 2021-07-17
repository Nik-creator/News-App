import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PerfectScrollbar from 'react-perfect-scrollbar';
import DataTable from 'src/components/dataTable/DataTable';
import NewsItem from 'src/components/newsItem';
import type { RootState } from 'src/redux/index';
import { useSelector } from 'src/redux/index';
import { useDispatch } from '../../redux/index';
import { fetchNews } from '../../redux/slice/news';

const News = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { articles: newsData, totalResults } = useSelector(({ news }: RootState) => news);

  // TODO запрос должен быть в санкe

  useEffect(
    () => {
      (async () => {
        try {
          setLoading(true);
          dispatch(fetchNews());
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      })();
    }, []
  );

  return (
    <PerfectScrollbar>
      {loading
          ? <CircularProgress />
          : <DataTable
              NewsRow={NewsItem}
              newsData={newsData}
          />}
    </PerfectScrollbar>
  );
};
export default React.memo(News);
