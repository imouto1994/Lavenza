// @flow

export const CHAR_SET: string =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/**
* @export
* Generates a random String given a String of characters to choose from
* and the length
* @param {object} options
* @param {string} options.charSet string containing characters to use to generate the random string
* @param {number} options.numChars length of the random string to be generated
* @returns String
*/
export function getRandomString(
  options: { charSet?: string, numChars?: number } = {}
): string {
  const charSet = options.charSet || CHAR_SET;
  const numChars = options.numChars || 6;
  return Array.apply(null, Array(numChars))
    .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
    .join("");
}
