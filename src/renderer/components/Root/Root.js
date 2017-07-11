import { h, Component } from "preact";
import { Provider } from "preact-redux";

import App from "../App";

export default class Root extends Component {
  render(props) {
    const { store } = props;
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
