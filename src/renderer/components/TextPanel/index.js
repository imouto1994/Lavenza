import { connect } from "react-redux";

import TextPanel from "./TextPanel";
import { latestTextSelector } from "../../selectors/TextSelectors";

export default connect(state => {
  return {
    latestText: latestTextSelector(state),
  };
})(TextPanel);
