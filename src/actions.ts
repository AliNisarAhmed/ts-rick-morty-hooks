import { MARK_FAVORITE, UNMARK_FAVORITE, FETCH_DATA } from "./actionConstants";

export const markFavorite = (id: string) => ({
  type: MARK_FAVORITE,
  id
});

export const unmarkFavorite = (id: string) => ({
  type: UNMARK_FAVORITE,
  id
});

export const fetchData = () => {
  return async (dispatch: any) => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    console.log(dataJSON._embedded);
    dispatch({
      type: FETCH_DATA,
      payload: {
        episodes: dataJSON._embedded.episodes,
        favorites: []
      }
    });
  };
};
