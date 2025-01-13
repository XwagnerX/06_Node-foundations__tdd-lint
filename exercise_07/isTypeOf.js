/**
 * #7 :: Export JS function "isTypeOf" to check if type of value matches type received as argument
 * input: any (value)
 * input: 'string' | 'number' | 'boolean' | 'array' (type)
 * output: boolean
 * validate input: throw TypeError with message "expected one of 'string', 'number', 'boolean', 'array' but received <type-of-argument>" if type is not valid
 */

/**
 * checks if type of value matches type received as argument
 * @param {*} value
 * @param {string} type
 * @returns {boolean}
 * @throws {TypeError}
 */
const isTypeOf = (value, type) => {
  if (typeof type !== "string") {
    throw new TypeError(
      `expected one of 'string', 'number', 'boolean', 'array' but received ${typeof type}`,
    );
  }

  if (Array.isArray(type)) {
    throw new TypeError(
      `expected one of 'string', 'number', 'boolean', 'array' but received array`,
    );
  }

  if (type === "array") {
    return Array.isArray(value);
  }

  return typeof value === type;
};

export default isTypeOf;
