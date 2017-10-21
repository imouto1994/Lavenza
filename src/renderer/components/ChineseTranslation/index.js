// @flow

import { connect } from "react-redux";

import type { State } from "../../reducers";

import ChineseTranslation from "./ChineseTranslation";
import {
  latestChineseTextOriginalSelector,
  latestChineseTextTranslatedSelector,
} from "../../selectors/TextSelectors";

type MappedProps = {
  original: string,
  translated: string,
};

function mapStateToProps(state: State): MappedProps {
  return {
    original: latestChineseTextOriginalSelector(state),
    translated: latestChineseTextTranslatedSelector(state),
  };
}

export default connect(mapStateToProps)(ChineseTranslation);
