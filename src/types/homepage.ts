import { Header, Media } from '.';

export interface Homepage {
  data: Data;
  meta: Meta;
}

export interface Data {
  attributes: Attributes;
  id: number;
}

export interface Attributes {
  Banners: Banner[];
  Header: Header;
  Logo: Media;
  Seo: Seo;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Seo {
  Description: string;
  Favicon: Media;
  Metas?: Meta[];
  Title: string;
  id: number;
}

export interface Meta {
  Content: string;
  id: number;
  Name: string;
}

export interface Banner {
  Background: Media;
  H1: string;
  H2: string;
  id: number;
}

export interface Meta {}
