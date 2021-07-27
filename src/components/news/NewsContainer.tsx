import React, { useMemo } from 'react';
import type { FC, ComponentType } from 'react';
import { IArticles } from 'src/types/News';
import {
  Button,
  Box,
  Container,
  CircularProgress,
} from '@material-ui/core';
import { useSelector } from 'src/redux/index';
import type { RootState } from 'src/redux/index';

interface OwnProps {
  NewsRow: ComponentType<IArticles>;
  newsData?: IArticles[];
  getNews: () => void
}

const NewsContainer: FC<OwnProps> = ({ NewsRow, newsData = [], getNews }) => {
  const { loading } = useSelector(({ news }: RootState) => news);
  const renderNewsCard = useMemo(
    () => newsData.map((data) => (
      <NewsRow
        key={data.publishedAt}
        {...data}
      />
    )), [newsData]
  );
  return (
    <Container maxWidth="md">
      {renderNewsCard}
      <Box
        mt={3}
        display="flex"
        justifyContent="center"
      >
        {!loading
          ?
            <Button variant="outlined" onClick={getNews}>
              Загрузить ещё
            </Button>
          :
            <CircularProgress />}
      </Box>
    </Container>
  );
};

export default NewsContainer;
