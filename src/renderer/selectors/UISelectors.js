// @flow

import type { State } from "../reducers";
import type { MainTab } from "../reducers/UIReducer";

export const currentMainTabSelector = function(state: State): MainTab {
  return state.UI.currentMainTab;
};

export const showTitleBarSelector = function(state: State): boolean {
  return state.UI.showTitleBar;
};

export const showMenuBarSelector = function(state: State): boolean {
  return state.UI.showMenuBar;
};

export const panelTransparencySelector = function(state: State): number {
  return state.UI.panelTransparency;
};
