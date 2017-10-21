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
