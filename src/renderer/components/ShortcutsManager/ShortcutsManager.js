// @flow

import type { Dispatch } from "redux";

import React, { PureComponent } from "react";
import Mousetrap from "mousetrap";

import type {
  ToggleMenuBarAction,
  ToggleTitleBarAction,
  ChangeTransparencyAction,
} from "../../actions/UIActions";

import {
  toggleMenuBar,
  toggleTitleBar,
  changeTransparency,
} from "../../actions/UIActions";

export type Props = {
  dispatch: Dispatch<
    ToggleMenuBarAction,
    ToggleTitleBarAction,
    ChangeTransparencyAction
  >,
};

const MENU_SHORTCUT = "mod+m";
const TITLE_SHORTCUT = "mod+t";
const INCREASE_TRANSPARENCY = "mod+o";
const DECREASE_TRANSPARENCY = "mod+p";

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

  increaseTransparency = (e: ShortcutEvent) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    const { dispatch } = this.props;
    dispatch(changeTransparency(0.05));
  };

  decreaseTransparency = (e: ShortcutEvent) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    const { dispatch } = this.props;
    dispatch(changeTransparency(-0.05));
  };

  componentDidMount() {
    Mousetrap.bind(MENU_SHORTCUT, this.toggleMenu);
    Mousetrap.bind(TITLE_SHORTCUT, this.toggleTitle);
    Mousetrap.bind(INCREASE_TRANSPARENCY, this.increaseTransparency);
    Mousetrap.bind(DECREASE_TRANSPARENCY, this.decreaseTransparency);
  }

  componentWillUnmount() {
    Mousetrap.unbind(MENU_SHORTCUT);
    Mousetrap.unbind(TITLE_SHORTCUT);
    Mousetrap.unbind(INCREASE_TRANSPARENCY);
    Mousetrap.unbind(DECREASE_TRANSPARENCY);
  }

  render() {
    return <noscript />;
  }
}

export default ShortcutsManager;
