/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 * validate input: throw TypeError with message "expected array but received <type-of-argument>" if input is not an array
 */

/**
 * gets length of a collection and check whether it is empty or not
 * @param {Array} collection
 * @returns {boolean}
 * @throws {TypeError}
 */
const checkCollectionHasElements = (collection) => {
  if (!Array.isArray(collection)) {
    throw new TypeError(`expected array but received ${typeof collection}`);
  }

  return collection.length > 0;
};

export default checkCollectionHasElements;
