import { MARK_FAVORITE } from "./actionConstants";
import { IState, IEpisode } from "./interfaces";

const initialState: IState = {
  episodes: [] as IEpisode[],
  favorites: [] as IEpisode[]
};

export default function reducer(
  state: IState = initialState,
  action: any
): IState {
  switch (action.type) {
    case MARK_FAVORITE:
      const episodeAlreadyInFavorite: boolean =
        state.favorites.findIndex(ep => ep.id === action.id) !== -1;
      if (episodeAlreadyInFavorite) {
        return state;
      } else {
        const clickedEpisode = state.episodes.filter(ep => ep.id === action.id);
        return {
          episodes: state.episodes,
          favorites: [...state.favorites, ...clickedEpisode]
        };
      }
    default:
      return state;
  }
}
