import React, { useMemo } from 'react';
import type { FC, ComponentType } from 'react';
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
    )), []
  );
  return (
    <Container maxWidth="md">
      {renderNewsCard}
    </Container>
  );
};

export default DataTable;
