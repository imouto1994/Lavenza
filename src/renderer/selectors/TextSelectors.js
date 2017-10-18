import last from "lodash/fp/last";
import { createSelector } from "reselect";

const textListSelector = function(state) {
  return state.Text.textList;
};

export const latestTextSelector = createSelector(textListSelector, list =>
  last(list)
);
