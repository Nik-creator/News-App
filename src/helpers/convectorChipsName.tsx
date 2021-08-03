import React from 'react';
import type { SortByType } from 'src/types/settings';

export const convectorChipsName = (englishName: SortByType) => {
  switch (englishName) {
    case 'popularity':
      return 'По популярности';
    case 'publishedAt':
      return 'По дате публикации';
    case 'relevancy':
      return 'По актуальности';
    default:
      return <></>;
  }
};

type RuName = 'По популярности' | 'По дате публикации' | 'По актуальности';

export const convectorChipsNameIntoEnglish = (ruName: RuName) => {
  switch (ruName) {
    case 'По популярности':
      return 'popularity';
    case 'По дате публикации':
      return 'publishedAt';
    case 'По актуальности':
      return 'relevancy';
    default:
      return <></>;
  }
};
