// @flow

import React, { PureComponent } from "react";

import styles from "./TextPanel.css";

type Props = {
  text: string,
};

class TextPanel extends PureComponent<Props> {
  render() {
    const { text } = this.props;

    return <div className={styles.panel}>{text}</div>;
  }
}

export default TextPanel;
