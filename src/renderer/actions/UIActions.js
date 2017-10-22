// @flow

import type { MainTab } from "../reducers/UIReducer";

export type SwitchTabAction = {
  type: "SWITCH_TAB",
  payload: {
    tabKey: MainTab,
  },
};

export function switchTab(tabKey: MainTab): SwitchTabAction {
  return {
    type: "SWITCH_TAB",
    payload: {
      tabKey,
    },
  };
}

export type ToggleTitleBarAction = {
  type: "TOGGLE_TITLE_BAR",
};

export function toggleTitleBar(): ToggleTitleBarAction {
  return {
    type: "TOGGLE_TITLE_BAR",
  };
}

export type ToggleMenuBarAction = {
  type: "TOGGLE_MENU_BAR",
};

export function toggleMenuBar(): ToggleMenuBarAction {
  return {
    type: "TOGGLE_MENU_BAR",
  };
}

export type ChangeTransparencyAction = {
  type: "CHANGE_TRANSPARENCY",
  payload: {
    value: number,
  },
};

export function changeTransparency(value: number): ChangeTransparencyAction {
  return {
    type: "CHANGE_TRANSPARENCY",
    payload: {
      value,
    },
  };
}
