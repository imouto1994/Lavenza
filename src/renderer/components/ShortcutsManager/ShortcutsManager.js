// @flow

import type { Dispatch } from "redux";

import React, { PureComponent } from "react";
import Mousetrap from "mousetrap";

import type {
  ToggleMenuBarAction,
  ToggleTitleBarAction,
} from "../../actions/UIActions";

import { toggleMenuBar, toggleTitleBar } from "../../actions/UIActions";

export type Props = {
  dispatch: Dispatch<ToggleMenuBarAction, ToggleTitleBarAction>,
};

const MENU_SHORTCUT = "mod+m";
const TITLE_SHORTCUT = "mod+t";

type ShortcutEvent = {
  preventDefault?: () => void,
};

class ShortcutsManager extends PureComponent<*> {
  toggleMenu = (e: ShortcutEvent) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    const { dispatch } = this.props;
    dispatch(toggleMenuBar());
  };

  toggleTitle = (e: ShortcutEvent) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    const { dispatch } = this.props;
    dispatch(toggleTitleBar());
  };

  componentDidMount() {
    Mousetrap.bind(MENU_SHORTCUT, this.toggleMenu);
    Mousetrap.bind(TITLE_SHORTCUT, this.toggleTitle);
  }

  componentWillUnmount() {
    Mousetrap.unbind(MENU_SHORTCUT);
    Mousetrap.unbind(TITLE_SHORTCUT);
  }

  render() {
    return <noscript />;
  }
}

export default ShortcutsManager;
