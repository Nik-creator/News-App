import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import API from 'src/API/api';
import DataTable from 'src/components/dataTable/index';
import NewsItem from 'src/components/newsItem';
import type { IArticles } from 'src/types/News';

const News = () => {
  const [loading, setLoading] = useState(false);
  // TODO данные должны лежать в redux
  const [newsData, setNewsData] = useState<IArticles[]>();
  // TODO запрос должен быть в санке
  useEffect(
    () => {
      (async () => {
        try {
          setLoading(true);
          const { articles } = await API.getAllNews();
          setNewsData(articles);
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      })();
    }, []
  );
  return (
    <div>
      {loading
        ? <CircularProgress />
        : <DataTable
            NewsRow={NewsItem}
            newsData={newsData}
        />}
    </div>
  );
};
export default React.memo(News);
