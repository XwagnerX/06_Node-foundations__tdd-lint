/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if inputs are not numbers
 */

/**
 * checks a pair of numbers and return true if their sum is 50 or greater than 50
 * @param {number} summand1
 * @param {number} summand2
 * @returns {boolean}
 * @throws {TypeError}
 */
const isAdditionGreaterThanFifty = (summand1, summand2) => {
  if (typeof summand1 !== "number") {
    throw new TypeError(`expected number but received ${typeof summand1}`);
  }

  if (typeof summand2 !== "number") {
    throw new TypeError(`expected number but received ${typeof summand2}`);
  }

  return summand1 + summand2 >= 50;
};

export default isAdditionGreaterThanFifty;
