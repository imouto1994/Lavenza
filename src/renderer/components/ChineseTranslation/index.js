// @flow

import { connect } from "react-redux";

import type { State } from "../../reducers";

import ChineseTranslation from "./ChineseTranslation";
import {
  latestChineseTextOriginalSelector,
  latestChineseTextTranslatedSelector,
} from "../../selectors/TextSelectors";
import { panelTransparencySelector } from "../../selectors/UISelectors";

type MappedProps = {
  original: string,
  translated: string,
  panelTransparency: number,
};

function mapStateToProps(state: State): MappedProps {
  return {
    original: latestChineseTextOriginalSelector(state),
    translated: latestChineseTextTranslatedSelector(state),
    panelTransparency: panelTransparencySelector(state),
  };
}

export default connect(mapStateToProps)(ChineseTranslation);
