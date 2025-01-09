/**
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
 * - if sum result exceeds 100, then return message "Sum with value <random> exceeds in <sum> from number 100"
 * - otherwise, return message "Sum with value <random> is left in <result> from number 100"
 * input: number (value)
 * output: string
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if input is not a number
 */

/**
 * generates a random number between 0-100 and it sum to given number, if the sum exceeds 100 returns "Sum with value N exceeds in N from number 100", otherwise returns "Sum with value N is left in N from number 100"
 * @param {number} inputNumber
 * @returns {string}
 * @throws {TypeError}
 */
const getDistanceMessageFromSumTo100 = (value) => {
  if (Array.isArray(value)) {
    throw new TypeError("expected number but received array");
  }

  if (typeof value !== "number") {
    throw new TypeError(`expected number but received ${typeof value}`);
  }

  const threshold = 100;
  const randomNumber = Math.floor(Math.random() * (threshold + 1));
  const sum = randomNumber + value;

  if (sum > threshold) {
    return `Sum with value ${sum} exceeds in ${sum - threshold} from number 100`;
  }

  return `Sum with value ${sum} is left in ${threshold - sum} from number 100`;
};

export default getDistanceMessageFromSumTo100;
