export const TEXT_RETRIEVE_NEW = "TEXT_RETRIEVE_NEW";
/**
 * 
 * 
 * @export
 * @param {any} text 
 * @returns 
 */
export function retrieveNewText(text) {
  return {
    type: TEXT_RETRIEVE_NEW,
    payload: {
      text,
    },
  };
}
