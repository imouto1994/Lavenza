// @flow

import React, { PureComponent } from "react";

import TextPanel from "../TextPanel";

import styles from "./ChineseTranslation.css";

type Props = {
  original: string,
  translated: string,
  panelTransparency: number,
};

export default class ChineseTranslation extends PureComponent<Props> {
  render() {
    const { original, translated, panelTransparency } = this.props;
    const inlineStyles = {
      background: `rgba(255, 255, 255, ${panelTransparency})`,
    };

    return (
      <div className={styles.translation} style={inlineStyles}>
        <div className={styles.panel}>
          <TextPanel text={original} />
        </div>
        <div className={styles.panel}>
          <TextPanel text={translated} />
        </div>
      </div>
    );
  }
}
