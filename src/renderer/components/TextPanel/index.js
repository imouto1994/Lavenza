import { connect } from "preact-redux";

import TextPanel from "./TextPanel";
import { latestTextSelector } from "../../selectors/TextSelectors";
import { pure } from "../../utils/component";

export default connect(state => {
  return {
    latestText: latestTextSelector(state),
  };
})(pure(TextPanel));
