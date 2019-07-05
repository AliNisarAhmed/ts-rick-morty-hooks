import React, { MouseEventHandler } from "react";
import { Store, IEpisode } from "./Store";

const App: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };

  const markEpisodeAsFav = (id: string): MouseEventHandler => () => {
    dispatch({
      type: "MARK_FAVORITE",
      payload: { id }
    });
  };

  const unmarkEpisodeAsFav = (id: string): MouseEventHandler => () => {
    dispatch({
      type: "UNMARK_FAVORITE",
      payload: { id }
    });
  };

  console.log(state);
  return (
    <div>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favorite episode</p>
      </header>
      <h2>Favorites</h2>
      <section className="episode-layout">
        {state.favorites.map((episode: IEpisode) => (
          <section key={episode.id} className="episode">
            <img
              src={episode.image ? episode.image.medium : ""}
              alt={`Rick & Morty ${episode.name}`}
            />
            <h2>{episode.name}</h2>
            <p>Episode Number: {episode.number}</p>
            <p>Season: {episode.season}</p>
            <button onClick={unmarkEpisodeAsFav(episode.id)}>Remove</button>
          </section>
        ))}
      </section>
      <hr />
      <h2>All Episodes</h2>
      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => (
          <section key={episode.id} className="episode">
            <img
              src={episode.image ? episode.image.medium : ""}
              alt={`Rick & Morty ${episode.name}`}
            />
            <h2>{episode.name}</h2>
            <p>Episode Number: {episode.number}</p>
            <p>Season: {episode.season}</p>
            <button onClick={markEpisodeAsFav(episode.id)}>Favorite</button>
          </section>
        ))}
      </section>
    </div>
  );
};

export default App;
