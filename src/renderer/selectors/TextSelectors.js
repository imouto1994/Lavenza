// @flow

import { last } from "lodash/fp";
import { createSelector } from "reselect";

import type { State } from "../reducers";
import type {
  TextDynamicMap,
  ChineseText,
  JapaneseText,
} from "../reducers/TextReducer";

const textIdsSelector = function(state: State): string[] {
  return state.Text.textList;
};

const textMapSelector = function(state: State): TextDynamicMap {
  return state.Text.textMap;
};

export const textByIDSelector = function(
  state: State,
  { textId }: { textId: string }
): ChineseText | JapaneseText {
  return state.Text.textMap[textId];
};

export const latestTextIdSelector: State => string = createSelector(
  textIdsSelector,
  (list: string[]): string => last(list)
);

export const latestChineseTextSelector: State => ChineseText = createSelector(
  [textIdsSelector, textMapSelector],
  (list: string[], map: TextDynamicMap): ChineseText => {
    const filteredList: string[] = list.filter(
      id => map[id].type === "Chinese"
    );
    const latestChineseText: ChineseText = (map[last(filteredList)]: any);
    return latestChineseText;
  }
);

export const latestChineseTextOriginalSelector: State => string = createSelector(
  latestChineseTextSelector,
  (text: ChineseText): string => text.original
);

export const latestChineseTextTranslatedSelector: State => string = createSelector(
  latestChineseTextSelector,
  (text: ChineseText): string => text.translated
);
