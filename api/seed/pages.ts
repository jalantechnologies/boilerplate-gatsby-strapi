import { getArticle } from './article';
import { getHomePage } from './home-page';

export const pages = [
  {
    name: 'home-page',
    getData: getHomePage,
    isCollection: false,
  },
  {
    name: 'article',
    getData: getArticle,
    isCollection: true,
  },
];
