// @flow
import type { Store } from "redux";

import React, { PureComponent } from "react";
import { Provider } from "react-redux";

import App from "../App";

type Props = {
  store: Store<*, *>,
};

export default class Root extends PureComponent<Props> {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
