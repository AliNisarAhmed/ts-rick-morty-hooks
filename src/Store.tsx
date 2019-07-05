import React from "react";

interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
}

interface IAction {
  type: string;
  payload: any;
}

export interface IEpisode {
  id: string;
  image: { medium: string };
  name: string;
  number: number;
  season: number;
}

const initialState: IState = {
  episodes: [],
  favorites: []
};

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "MARK_FAVORITE":
      const alreadyInFavorite: boolean =
        state.favorites.findIndex(ep => ep.id === action.payload) !== -1;
      if (alreadyInFavorite) return state;
      const [favEpisode] = state.episodes.filter(
        ep => ep.id === action.payload
      );
      return {
        episodes: state.episodes,
        favorites: [...state.favorites, favEpisode]
      };
    case "UNMARK_FAVORITE":
      return {
        episodes: [...state.episodes],
        favorites: state.favorites.filter(ep => ep.id !== action.payload)
      };
    default:
      return state;
  }
};

export function StoreProvider(props: { children: any }): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
