import React, { useMemo } from 'react';
import type { FC, ComponentType } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IArticles } from 'src/types/News';
import Container from '@material-ui/core/Container';

interface OwnProps {
  NewsRow: ComponentType<IArticles>;
  newsData?: IArticles[];
}

const DataTable: FC<OwnProps> = ({ NewsRow, newsData = [] }) => {
  const renderNewsCard = useMemo(
    () => newsData.map((data) => (
      <NewsRow
        key={data.publishedAt}
        {...data}
      />
    )), [newsData]
  );

  // TODO добавить InfiniteScroll
  return (
    <Container maxWidth="md">
      {renderNewsCard}
    </Container>
  );
};

export default DataTable;
