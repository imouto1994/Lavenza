// @flow

import React, { PureComponent } from "react";
import keyMirror from "keymirror";

import Menu from "../Menu";
import ChineseTranslation from "../ChineseTranslation";

import styles from "./App.css";

type Props = {
  className: string,
};

type State = {
  current: string,
};

type MenuClickEvent = {
  key: string,
};

const TABS = keyMirror({
  CHI2VIE: null,
  JPN2VIE: null,
  SETTINGS: null,
});

export default class App extends PureComponent<Props, State> {
  state: State = {
    current: TABS.CHI2VIE,
  };

  handleClick = (e: MenuClickEvent) => {
    if (!e.key.startsWith("view_")) {
      this.setState({
        current: e.key,
      });
    }
  };

  render() {
    const { current } = this.state;

    return (
      <div className={styles.app}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key={TABS.CHI2VIE}>{"Chi -> Vie"}</Menu.Item>
          <Menu.Item key={TABS.JPN2VIE}>{"Jpn -> Vie"}</Menu.Item>
          <Menu.SubMenu title={<span>View</span>}>
            <Menu.ItemGroup title="Show / Hide">
              <Menu.Item key="view_toggleMenuBar">Toggle Menu Bar</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Menu.Item key={TABS.SETTINGS}>Settings</Menu.Item>
        </Menu>
        <div className={styles.content}>{this.renderContent()}</div>
      </div>
    );
  }

  renderContent() {
    const { current } = this.state;
    if (current === TABS.CHI2VIE) {
      return <ChineseTranslation />;
    }

    return null;
  }
}
