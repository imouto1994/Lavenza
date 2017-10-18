// @flow

import React, { PureComponent } from "react";

type Props = {
  latestText: string,
};

class TextPanel extends PureComponent<Props> {
  render() {
    const { latestText } = this.props;

    return <div>{latestText}</div>;
  }
}

export default TextPanel;
