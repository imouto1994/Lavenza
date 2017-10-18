import React from "react";
import { render } from "react-dom";

import Root from "./components/Root";
import configureStore from "./store";
import rootSaga from "./sagas";

const store = configureStore();
store.runSaga(rootSaga);

/**
 *
 *
 * @param {any} Component
 */
function renderApp(Component) {
  render(<Component store={store} />, document.getElementById("root"));
}

renderApp(Root);

/**
 *
 *
 */
function hotHandler() {
  const NextRoot = require("./components/Root");
  renderApp(NextRoot);
}

// Enable hot reload
if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept("./components/Root", hotHandler);
  }
}
