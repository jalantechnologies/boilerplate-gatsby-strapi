import { Media } from '.';
import { Meta, Seo } from './homepage';

export interface Article {
  data: Data;
  meta: Meta;
}

export interface Data {
  attributes: ArticleAttributes;
  id: number;
}

export interface ArticleAttributes {
  Author: string;
  Description: string;
  Media: Media;
  Seo: Seo;
  Title: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}
