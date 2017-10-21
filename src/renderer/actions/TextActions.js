// @flow

import type { Lang } from "../reducers/TextReducer";

export type TextRetrieveNewAction = {
  type: "TEXT_RETRIEVE_NEW",
  payload: {
    id: string,
    text: string,
    lang: Lang,
  },
};

export function retrieveNewText(
  id: string,
  text: string,
  lang: Lang
): TextRetrieveNewAction {
  return {
    type: "TEXT_RETRIEVE_NEW",
    payload: {
      id,
      text,
      lang,
    },
  };
}

export type UpdateChineseTranslatedAction = {
  type: "UPDATE_CHINESE_TRANSLATED",
  payload: {
    id: string,
    translated: string,
  },
};

export function updateChineseTranslated(
  id: string,
  translated: string
): UpdateChineseTranslatedAction {
  return {
    type: "UPDATE_CHINESE_TRANSLATED",
    payload: {
      id,
      translated,
    },
  };
}
