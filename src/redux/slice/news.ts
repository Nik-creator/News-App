import {
  createSlice,
  createAsyncThunk,
  AsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit';
import * as _ from 'lodash';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { INews } from 'src/types/News';
import API from 'src/API/api';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;

const isRejectedAction = (action: AnyAction): action is RejectedAction =>
 action.type.endsWith('/rejected');
const isPendingAction = (action: AnyAction): action is PendingAction =>
 action.type.endsWith('/pending');

const sliceName = 'news';

export const fetchNews = createAsyncThunk(
  `${sliceName}/fetchNews`,
  async (thunkAPI) => {
    try {
      const newsData = await API.getAllNews();
      return newsData;
    } catch {
      throw new Error('Ошибка при загрузке новостей');
    }
  }
);

const initialState: INews = {
  status: null,
  error: null,
  currentPage: 1,
  loading: false,
  totalResults: 0,
  articles: [],
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    resetNews(
      state: INews,
    ) {
      state.articles = initialState.articles;
      state.currentPage = initialState.currentPage;
    },
    setPage(
      state: INews,
      action: PayloadAction<number>
    ) {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      const {
        articles,
        status,
        totalResults
      } = payload;
      const newListNews = state.articles.concat(articles);
      state.articles = newListNews;

      // if (state.articles.length > 0) {
      //   const newListNews =
      //   _.differenceWith(state.articles, articles, ({ publishedAt: publishedAtInState, publishedAt: publishedAtInAction }) => publishedAtInState === publishedAtInAction);
      //   state.articles = newListNews;
      // } else {
      //   state.articles = articles;
      // }
      state.status = status;
      state.totalResults = totalResults;
      state.loading = false;
    });
    builder.addMatcher(isRejectedAction, (state, { error }) => {
      state.error = error;
      state.loading = false;
    });
    builder.addMatcher(isPendingAction, (state) => {
      state.error = null;
      state.loading = true;
    });
  }
});

export const { resetNews, setPage } = slice.actions;

export const { reducer } = slice;

export default slice;
