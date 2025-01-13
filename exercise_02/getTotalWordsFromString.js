/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 * validate input: throw TypeError with message "expected string but received <type-of-argument>" if input is not a string
 */

/**
 * gets the total number of words contained in one string
 * @param {string} sentence
 * @returns {number}
 * @throws {TypeError}
 */
const getTotalWordsFromString = (sentence) => {
  if (typeof sentence !== "string") {
    throw new TypeError(`expected string but received ${typeof sentence}`);
  }

  if (sentence.trim() === "") {
    return 0;
  }

  const sentenceSplited = sentence.trim().split(" ");
  const sentenceLength = sentenceSplited.length;

  return sentenceLength;
};

export default getTotalWordsFromString;
