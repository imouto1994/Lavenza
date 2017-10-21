// @flow

import { update } from "lodash/fp";

import type {
  TextRetrieveNewAction,
  UpdateChineseTranslatedAction,
} from "../actions/TextActions";

export type Lang = "Chinese" | "Japanese";

export type ChineseText = {
  type: "Chinese",
  original: string,
  translated: string,
};

export type JapaneseText = {
  type: "Japanese",
  original: string,
  baiduTranslated: string,
};

export type TextDynamicMap = { [key: string]: ChineseText | JapaneseText };

export type State = {
  textMap: TextDynamicMap,
  textList: string[],
};

export type Action = TextRetrieveNewAction | UpdateChineseTranslatedAction;

const initialState: State = {
  textMap: {},
  textList: [],
};

function handleRetrieveNewText(
  state: State,
  action: TextRetrieveNewAction
): State {
  const { payload } = action;
  const { text, lang, id } = payload;

  const textMapUpdater = update(
    "textMap",
    (map: TextDynamicMap): TextDynamicMap => {
      if (lang === "Chinese") {
        map[id] = {
          type: "Chinese",
          original: text,
          translated: "",
        };
      } else if (lang === "Japanese") {
        map[id] = {
          type: "Japanese",
          original: text,
          baiduTranslated: "",
        };
      }

      return map;
    }
  );

  const textListUpdater = update("textList", (list: string[]): string[] => {
    const copiedList: string[] = list.slice(0);
    if (copiedList.length > 50) {
      copiedList.shift();
    }
    copiedList.push(id);

    return copiedList;
  });

  const nextState: State = textMapUpdater(textListUpdater(state));

  return nextState;
}

function handleUpdateChineseTranslated(
  state: State,
  action: UpdateChineseTranslatedAction
): State {
  const { payload } = action;
  const { translated, id } = payload;

  const translatedUpdater = update(
    `textMap.${id}`,
    (map: ChineseText): ChineseText => {
      map.translated = translated;
      return map;
    }
  );

  const nextState: State = translatedUpdater(state);

  return nextState;
}

export default function TextReducer(
  state: State = initialState,
  action: Action
) {
  const { type } = action;
  switch (type) {
    case "TEXT_RETRIEVE_NEW": {
      const castedAction: TextRetrieveNewAction = (action: any);
      return handleRetrieveNewText(state, castedAction);
    }
    case "UPDATE_CHINESE_TRANSLATED": {
      const castedAction: UpdateChineseTranslatedAction = (action: any);
      return handleUpdateChineseTranslated(state, castedAction);
    }
    default:
      return state;
  }
}
