export interface Meta {}

export interface Banner {
  Background: Media;
  Duration: number;
  Description?: string;
  H1: string;
  H2: string;
  Position: number;
  id: number;
}

export interface Media {
  data: MediaData;
}

export interface MediaData {
  id: number;
  attributes: MediaAttributes;
}

export interface MediaAttributes {
  alternativeText: string;
  caption: string;
  createdAt: string;
  ext: string;
  formats?: Formats;
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: unknown;
  size: number;
  updatedAt: string;
  url: string;
  width: number;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: string;
  size: number;
  url: string;
  width: number;
}

export interface Header {
  Logo: Media;
  Menus: Menu[];
}

export interface Menu {
  id: number;
  Label: string;
  Submenus: Submenu[];
  Target: string;
  Url: string;
}

export interface Submenu {
  id: number;
  Label: string;
  Target: string;
  Url: string;
}
