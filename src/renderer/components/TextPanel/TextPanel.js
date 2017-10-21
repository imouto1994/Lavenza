// @flow

import React, { PureComponent } from "react";

type Props = {
  text: string,
};

class TextPanel extends PureComponent<Props> {
  render() {
    const { text } = this.props;

    return <div>{text}</div>;
  }
}

export default TextPanel;
