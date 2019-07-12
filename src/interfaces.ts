export interface IProps {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
}

export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
}

export interface IEpisode {
  id: string;
  image: { medium: string };
  name: string;
  number: number;
  season: number;
}
