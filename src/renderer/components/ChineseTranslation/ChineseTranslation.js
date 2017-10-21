// @flow

import React, { PureComponent } from "react";

import TextPanel from "../TextPanel";

type Props = {
  original: string,
  translated: string,
};

export default class ChineseTranslation extends PureComponent<Props> {
  render() {
    const { original, translated } = this.props;

    return (
      <div>
        <TextPanel text={original} />
        <hr />
        <TextPanel text={translated} />
      </div>
    );
  }
}
