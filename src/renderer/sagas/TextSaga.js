// @flow

import { delay } from "redux-saga";
import { call, put, select } from "redux-saga/effects";
import { clipboard } from "electron";

import type { MainTab } from "../reducers/UIReducer";

import {
  retrieveNewText,
  updateChineseTranslated,
} from "../actions/TextActions";
import { currentMainTabSelector } from "../selectors/UISelectors";
import { getRandomString } from "../utils/string";

/**
 *
 *
 * @export
 */
function fetchChineseTranslatedText(text: string): Promise<{ text: string }> {
  return fetch(`http://localhost:5000/quickTranslator?text=${text}`).then(res =>
    res.json()
  );
}

export function* watchClipboard(): Iterable<*> {
  let previousText: string;

  while (true) {
    // $FlowFixMe
    const text: string = yield call(clipboard.readText);

    if (previousText == null || text !== previousText) {
      // $FlowFixMe
      const currentMainTab: MainTab = yield select(currentMainTabSelector);
      if (currentMainTab === "CHI2VIE") {
        const textId = getRandomString();
        yield put(retrieveNewText(textId, text, "Chinese"));
        // $FlowFixMe
        const { text: translatedText }: { text: string } = yield call(
          fetchChineseTranslatedText,
          text
        );
        yield put(updateChineseTranslated(textId, translatedText));
        previousText = text;
      } else if (currentMainTab === "JPN2VIE") {
        const textId = getRandomString();
        yield put(retrieveNewText(textId, text, "Japanese"));
        previousText = text;
      }
    }
    yield delay(500);
  }
}
