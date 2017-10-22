// @flow

import type { Dispatch } from "redux";

import React, { PureComponent } from "react";

import type { MainTab } from "../../reducers/UIReducer";
import type { SwitchTabAction } from "../../actions/UIActions";

import Menu from "../Menu";
import ChineseTranslation from "../ChineseTranslation";
import ShortcutsManager from "../ShortcutsManager";
import { switchTab } from "../../actions/UIActions";

import styles from "./App.css";

export type Props = {
  dispatch: Dispatch<SwitchTabAction>,
  currentMainTab: MainTab,
  showMenuBar: boolean,
  showTitleBar: boolean,
};

type MenuClickEvent = {
  key: string,
};

const MAIN_TABS: MainTab[] = ["CHI2VIE", "JPN2VIE", "SETTINGS"];

export default class App extends PureComponent<Props> {
  handleClick = (e: MenuClickEvent) => {
    if (!e.key.startsWith("view_")) {
      const { dispatch } = this.props;
      const matchedKey = MAIN_TABS.find(key => key === e.key);

      if (matchedKey != null) {
        dispatch(switchTab(matchedKey));
      }
    }
  };

  render() {
    return (
      <div className={styles.app}>
        <ShortcutsManager />
        {this.renderTitleBar()}
        {this.renderMenu()}
        <div className={styles.content}>{this.renderContent()}</div>
      </div>
    );
  }

  renderTitleBar() {
    const { showTitleBar } = this.props;

    if (!showTitleBar) {
      return null;
    }

    return (
      <div className={styles.titleBar}>
        <h4>Lavenza</h4>
      </div>
    );
  }

  renderMenu() {
    const { currentMainTab, showMenuBar } = this.props;

    if (!showMenuBar) {
      return null;
    }

    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[currentMainTab]}
        mode="horizontal"
      >
        <Menu.Item key={MAIN_TABS[0]}>{"Chi -> Vie"}</Menu.Item>
        <Menu.Item key={MAIN_TABS[1]}>{"Jpn -> Vie"}</Menu.Item>
        <Menu.SubMenu title={<span>View</span>}>
          <Menu.ItemGroup title="Show / Hide">
            <Menu.Item key="view_toggleMenuBar">Toggle Menu Bar</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.Item key={MAIN_TABS[2]}>Settings</Menu.Item>
      </Menu>
    );
  }

  renderContent() {
    const { currentMainTab } = this.props;
    if (currentMainTab === MAIN_TABS[0]) {
      return <ChineseTranslation />;
    }

    return null;
  }
}
