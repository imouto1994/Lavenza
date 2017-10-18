import update from "lodash/fp/update";

import { TEXT_RETRIEVE_NEW } from "../actions/TextActions";

const initialState = {
  textList: [],
};

function handleRetrieveNewText(state, action) {
  const { payload } = action;
  const { text } = payload;
  return update(
    "textList",
    list => {
      const copiedList = list.slice(0);
      if (copiedList.length > 50) {
        copiedList.shift();
      }
      copiedList.push(text);

      return copiedList;
    },
    state
  );
}

export default function TextReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TEXT_RETRIEVE_NEW:
      return handleRetrieveNewText(state, action);
    default:
      return state;
  }
}
