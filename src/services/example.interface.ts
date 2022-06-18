export interface Jpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Webp {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Images {
  jpg: Jpg;
  webp: Webp;
}

export interface Images2 {
  image_url?: any;
  small_image_url?: any;
  medium_image_url?: any;
  large_image_url?: any;
  maximum_image_url?: any;
}

export interface Trailer {
  youtube_id?: any;
  url?: any;
  embed_url?: any;
  images: Images2;
}

export interface From {
  day: number;
  month: number;
  year: number;
}

export interface To {
  day: number;
  month: number;
  year: number;
}

export interface Prop {
  from: From;
  to: To;
}

export interface Aired {
  from: Date;
  to: Date;
  prop: Prop;
  string: string;
}

export interface Broadcast {
  day?: any;
  time?: any;
  timezone?: any;
  string?: any;
}

export interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Licensor {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Studio {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Theme {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Entry {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Relation {
  relation: string;
  entry: Entry[];
}

export interface Theme2 {
  openings: string[];
  endings: string[];
}

export interface External {
  name: string;
  url: string;
}

export interface Data {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season?: any;
  year?: any;
  broadcast: Broadcast;
  producers: Producer[];
  licensors: Licensor[];
  studios: Studio[];
  genres: Genre[];
  explicit_genres: any[];
  themes: Theme[];
  demographics: any[];
  relations: Relation[];
  theme: Theme2;
  external: External[];
}

export interface AnimeIfo {
  data: Data;
}
