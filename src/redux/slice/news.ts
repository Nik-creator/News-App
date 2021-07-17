import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { INews } from 'src/types/News';
import type { AppThunk } from 'src/redux/index';
import API from 'src/API/api';

const sliceName = 'news';

const initialState: INews = {
  status: null,
  totalResults: 0,
  articles: []
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setNews(
      state: INews,
      action: PayloadAction<INews>
    ) {
      const {
        articles,
        totalResults,
        status
      } = action.payload;
      state.articles = articles;
      state.totalResults = totalResults;
      state.status = status;
    }
  }
});

export const fetchNews = (): AppThunk => async (dispatch) => {
  const newsData = await API.getAllNews();
  dispatch(slice.actions.setNews(newsData));
};

export const { reducer } = slice;

export default slice;
