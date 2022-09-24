export interface RootObject {
  artists: Artist[];
  highlightsurls: Record<string, unknown>;
  hub: Hub;
  images: Images;
  key: string;
  layout: string;
  properties: Record<string, unknown>;
  share: Share;
  subtitle: string;
  title: string;
  type: string;
  url: string;
}

export interface Artist {
  adamid: string;
  alias: string;
  id: string;
}

export interface Hub {
  actions: Action[];
  displayname: string;
  explicit: boolean;
  image: string;
  options: Option[];
  type: string;
}

export interface Action {
  id?: string;
  name: string;
  type: string;
  uri?: string;
}

export interface Option {
  actions: Action[];
  beacondata: Beacondata;
  caption: string;
  colouroverflowimage: boolean;
  image: string;
  listcaption: string;
  overflowimage: string;
  providername: string;
  type: string;
}

export interface Beacondata {
  providername: string;
  type: string;
}

export interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

export interface Share {
  avatar: string;
  href: string;
  html: string;
  image: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
}
