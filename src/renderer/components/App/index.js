// @flow

import { connect } from "react-redux";

import type { State } from "../../reducers";
import type { MainTab } from "../../reducers/UIReducer";

import App from "./App";
import { currentMainTabSelector } from "../../selectors/UISelectors";

type MappedProps = {
  currentMainTab: MainTab,
};

function mapStateToProps(state: State): MappedProps {
  return {
    currentMainTab: currentMainTabSelector(state),
  };
}

export default connect(mapStateToProps)(App);
