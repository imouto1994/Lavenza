// @flow

import { update } from "lodash/fp";

import type {
  SwitchTabAction,
  ToggleMenuBarAction,
  ToggleTitleBarAction,
} from "../actions/UIActions";

export type MainTab = "CHI2VIE" | "JPN2VIE" | "SETTINGS";

export type State = {
  currentMainTab: MainTab,
  showTitleBar: boolean,
  showMenuBar: boolean,
};

export type Action = SwitchTabAction;

const initialState: State = {
  currentMainTab: "CHI2VIE",
  showTitleBar: true,
  showMenuBar: true,
};

function handleSwitchTab(state: State, action: SwitchTabAction): State {
  const { payload } = action;
  const { tabKey } = payload;

  const tabUpdater = update("currentMainTab", () => tabKey);

  return tabUpdater(state);
}

function handleToggleMenuBar(state: State, action: ToggleMenuBarAction): State {
  const flagUpdater = update("showMenuBar", flag => !flag);
  return flagUpdater(state);
}

function handleToggleTitleBar(
  state: State,
  action: ToggleTitleBarAction
): State {
  const flagUpdater = update("showTitleBar", flag => !flag);
  return flagUpdater(state);
}

export default function TextReducer(
  state: State = initialState,
  action: Action
) {
  const { type } = action;

  switch (type) {
    case "SWITCH_TAB": {
      const castedAction: SwitchTabAction = (action: any);
      return handleSwitchTab(state, castedAction);
    }
    case "TOGGLE_MENU_BAR": {
      const castedAction: ToggleMenuBarAction = (action: any);
      return handleToggleMenuBar(state, castedAction);
    }
    case "TOGGLE_TITLE_BAR": {
      const castedAction: ToggleTitleBarAction = (action: any);
      return handleToggleTitleBar(state, castedAction);
    }
    default:
      return state;
  }
}
