import { h, render } from "preact";
import edge from "edge-js";
import { remote } from "electron";

import Root from "./components/Root";
import configureStore from "./store";
import rootSaga from "./sagas";

const { dialog } = remote;

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

dialog.showOpenDialog({ properties: ["openFile"] }, filePaths => {
  const dllFilePath = filePaths[0];
  const translateMethod = edge.func({
    source: `
      async (input) => {
        return TranslatorEngine.TranslatorEngine.ChineseToVietPhraseOneMeaningForBatch("这个词的可怕之处在于, 它是重逢, 也是告别.", 1, 1, true);
      }
    `,
    references: [dllFilePath],
  });
  translateMethod("test", (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});
