/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
 * - if total number of words is greater than 5, then return uppercase string
 * - otherwise, return lowercase string
 * input: string (sentence)
 * output: string
 * validate input: throw TypeError with message "expected string but received <type-of-argument>" if input is not a string
 */

/**
 * returns the parameter sentence in upper case if the number of sentence words if greater then 5, otherwise return lower case string
 * @param {string} sentence
 * @returns {string}
 * @throws {TypeError}
 */
const formatStringByWordsLength = (sentence) => {
  if (Array.isArray(sentence)) {
    throw new TypeError("expected string but received array");
  }

  if (typeof sentence !== "string") {
    throw new TypeError(`expected string but received ${typeof sentence}`);
  }

  const sentenceSplited = sentence.split(" ");
  const threshold = 5;

  if (sentenceSplited.length > threshold) {
    return sentence.toUpperCase();
  }

  return sentence.toLowerCase();
};

export default formatStringByWordsLength;
