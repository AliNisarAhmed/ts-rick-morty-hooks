import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { IState } from "./interfaces";
import thunk from "redux-thunk";

// const initialState: IState = {
//   episodes: [
//     {
//       id: "1",
//       image: "",
//       name: "First Episode",
//       number: 1,
//       season: 1
//     },
//     {
//       id: "2",
//       image: "",
//       name: "Second Episode",
//       number: 1,
//       season: 2
//     },
//     {
//       id: "3",
//       image: "",
//       name: "Third Episode",
//       number: 1,
//       season: 3
//     }
//   ],
//   favorites: []
// };

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
