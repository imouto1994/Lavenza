// @flow

import type { State } from "../reducers";
import type { MainTab } from "../reducers/UIReducer";

export const currentMainTabSelector = function(state: State): MainTab {
  return state.UI.currentMainTab;
};
