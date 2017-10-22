// @flow

import { connect } from "react-redux";

import type { State } from "../../reducers";
import type { MainTab } from "../../reducers/UIReducer";

import App from "./App";
import {
  currentMainTabSelector,
  showMenuBarSelector,
  showTitleBarSelector,
} from "../../selectors/UISelectors";

type MappedProps = {
  currentMainTab: MainTab,
  showMenuBar: boolean,
  showTitleBar: boolean,
};

function mapStateToProps(state: State): MappedProps {
  return {
    currentMainTab: currentMainTabSelector(state),
    showMenuBar: showMenuBarSelector(state),
    showTitleBar: showTitleBarSelector(state),
  };
}

export default connect(mapStateToProps)(App);
