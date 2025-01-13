/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if inputs are not numbers
 */

/**
 * checks whether one number is greater than a given number
 * @param {number} value
 * @param {number} threshold
 * @returns {boolean}
 * @throws {TypeError}
 */
const isGreaterThan = (value, threshold) => {
  if (typeof value !== "number") {
    throw new TypeError(`expected number but received ${typeof value}`);
  }

  if (typeof threshold !== "number") {
    throw new TypeError(`expected number but received ${typeof threshold}`);
  }

  return value > threshold;
};

export default isGreaterThan;
