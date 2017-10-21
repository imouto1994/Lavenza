// @flow

import { update } from "lodash/fp";

import type { SwitchTabAction } from "../actions/UIActions";

export type MainTab = "CHI2VIE" | "JPN2VIE" | "SETTINGS";

export type State = {
  currentMainTab: MainTab,
};

export type Action = SwitchTabAction;

const initialState: State = {
  currentMainTab: "CHI2VIE",
};

function handleSwitchTab(state: State, action: SwitchTabAction): State {
  const { payload } = action;
  const { tabKey } = payload;

  const tabUpdater = update("currentMainTab", () => tabKey);

  return tabUpdater(state);
}

export default function TextReducer(
  state: State = initialState,
  action: Action
) {
  const { type } = action;

  switch (type) {
    case "SWITCH_TAB":
      return handleSwitchTab(state, action);
    default:
      return state;
  }
}
