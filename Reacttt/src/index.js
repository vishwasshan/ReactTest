import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";
import reducers from "./Redux/Reducers/index";

import { Provider } from "react-redux";
import { createStore } from "redux";


const store = createStore(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
