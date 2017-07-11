import { all, call } from "redux-saga/effects";

import { watchClipboard } from "./TextSaga";

export default function* rootSaga() {
  yield all([call(watchClipboard)]);
}
