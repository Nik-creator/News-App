export interface ISource {
  id: number | null;
  name: string
}

export interface IArticles {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
}

export interface INews {
  status: 'ok' | 'error' | null;
  totalResults: number;
  articles: IArticles[]
}
