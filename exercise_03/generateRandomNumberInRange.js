/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if input is not a number
 */

/**
 * generates a rounded random number depending on a limit
 * @param {number} threshold
 * @returns {number}
 * @throws {TypeError}
 */
const generateRandomNumberInRange = (threshold) => {
  if (typeof threshold !== "number") {
    throw new TypeError(`expected number but received ${typeof threshold}`);
  }

  const randomNumber = Math.floor(Math.random() * (threshold + 1));

  return randomNumber;
};

export default generateRandomNumberInRange;
