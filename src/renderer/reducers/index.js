// @flow

import { combineReducers } from "redux";

import type { State as TextState } from "./TextReducer";
import type { State as UIState } from "./UIReducer";

import TextReducer from "./TextReducer";
import UIReducer from "./UIReducer";

export type State = {
  Text: TextState,
  UI: UIState,
};

export default combineReducers({
  Text: TextReducer,
  UI: UIReducer,
});
