import React from "react";
import { connect } from "react-redux";
import { IState, IProps, IEpisode } from "./interfaces";
import { bindActionCreators } from "redux";
import * as actionCreators from "./actions";

interface AppProps {
  actions: any;
  episodes: IEpisode[];
  favorites: IEpisode[];
}

class App extends React.Component<AppProps, any> {
  markFavorite = (id: string) => () => {
    this.props.actions.markFavorite(id);
  };

  render() {
    return (
      <div>
        <header className="header">
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode</p>
        </header>
        <h2>Favorites</h2>
        <section className="episode-layout">
          {this.props.favorites.map((episode: IEpisode) => (
            <section key={episode.id} className="episode">
              <img
                src={episode.image ? episode.image : ""}
                alt={`Rick & Morty ${episode.name}`}
              />
              <h2>{episode.name}</h2>
              <p>Episode Number: {episode.number}</p>
              <p>Season: {episode.season}</p>
              <button onClick={() => {}}>Remove</button>
            </section>
          ))}
        </section>
        <hr />
        <h2>All Episodes</h2>
        <section className="episode-layout">
          {this.props.episodes.map((episode: IEpisode) => (
            <section key={episode.id} className="episode">
              <img
                src={episode.image ? episode.image : ""}
                alt={`Rick & Morty ${episode.name}`}
              />
              <h2>{episode.name}</h2>
              <p>Episode Number: {episode.number}</p>
              <p>Season: {episode.season}</p>
              <button onClick={this.markFavorite(episode.id)}>Favorite</button>
            </section>
          ))}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state: IState) {
  return {
    episodes: state.episodes,
    favorites: state.favorites
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// const App: React.FC = () => {
//   const { state, dispatch } = React.useContext(Store);

//   React.useEffect(() => {
//     state.episodes.length === 0 && fetchDataAction();
//   });

//   const fetchDataAction = async () => {
//     const URL =
//       "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
//     const data = await fetch(URL);
//     const dataJSON = await data.json();
//     return dispatch({
//       type: "FETCH_DATA",
//       payload: dataJSON._embedded.episodes
//     });
//   };

//   const markEpisodeAsFav = (id: string): MouseEventHandler => () => {
//     dispatch({
//       type: "MARK_FAVORITE",
//       payload: { id }
//     });
//   };

//   const unmarkEpisodeAsFav = (id: string): MouseEventHandler => () => {
//     dispatch({
//       type: "UNMARK_FAVORITE",
//       payload: { id }
//     });
//   };

//   console.log(state);
//   return (
//     <div>
//       <header className="header">
//         <h1>Rick and Morty</h1>
//         <p>Pick your favorite episode</p>
//       </header>
//       <h2>Favorites</h2>
//       <section className="episode-layout">
//         {state.favorites.map((episode: IEpisode) => (
//           <section key={episode.id} className="episode">
//             <img
//               src={episode.image ? episode.image.medium : ""}
//               alt={`Rick & Morty ${episode.name}`}
//             />
//             <h2>{episode.name}</h2>
//             <p>Episode Number: {episode.number}</p>
//             <p>Season: {episode.season}</p>
//             <button onClick={unmarkEpisodeAsFav(episode.id)}>Remove</button>
//           </section>
//         ))}
//       </section>
//       <hr />
//       <h2>All Episodes</h2>
//       <section className="episode-layout">
//         {state.episodes.map((episode: IEpisode) => (
//           <section key={episode.id} className="episode">
//             <img
//               src={episode.image ? episode.image.medium : ""}
//               alt={`Rick & Morty ${episode.name}`}
//             />
//             <h2>{episode.name}</h2>
//             <p>Episode Number: {episode.number}</p>
//             <p>Season: {episode.season}</p>
//             <button onClick={markEpisodeAsFav(episode.id)}>Favorite</button>
//           </section>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default App;
