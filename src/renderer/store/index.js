import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { enableBatching } from "redux-batched-actions";
import { batchedSubscribe } from "redux-batched-subscribe";

import rootReducer from "../reducers/index";

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
if (process.env.NODE_ENV === "development") {
  const { createLogger } = require("redux-logger");
  middlewares.push(createLogger());
}

/**
 * 
 * 
 * @param {any} notify 
 */
function notifyHandler(notify) {
  notify();
}

/**
 * 
 * 
 * @export
 * @param {any} initialState 
 * @returns 
 */
export default function configureStore(initialState) {
  const store = createStore(
    enableBatching(rootReducer),
    initialState,
    compose(applyMiddleware(...middlewares), batchedSubscribe(notifyHandler))
  );

  store.runSaga = sagaMiddleware.run;

  return store;
}
