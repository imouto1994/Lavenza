import { delay } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { clipboard } from "electron";

import { retrieveNewText } from "../actions/TextActions";

/**
 * 
 * 
 * @export
 */
export function* watchClipboard() {
  let previousText;
  while (true) {
    const text = yield call(clipboard.readText);
    if (previousText == null || text !== previousText) {
      yield put(retrieveNewText(text));
      previousText = text;
    }
    yield delay(500);
  }
}
