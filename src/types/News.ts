export interface ISource {
  id: number | null;
  name: string
}

export interface IArticles {
  source?: ISource;
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string | null;
}

export interface INews {
  loading: boolean;
  status: 'ok' | 'error' | null;
  currentPage: number;
  totalResults: number;
  articles: IArticles[];
  error: any
}
