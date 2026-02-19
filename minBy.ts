/**
 *
Implement a function minBy(array, iteratee) that finds the element inside array with the minimum value after going through iteratee.

Arguments
array (Array): The array to iterate over.
iteratee (Function): The iteratee invoked per element, which is a function that accepts one argument: (value).
Returns
(*): Returns the minimum value.
*/

/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
export default function minBy(array, iteratee) {
  let result, computed;

  // Iterate through array to find the minimum `result`.
  for (const value of array) {
    const current = iteratee(value);
    // Check whether `computed` is assigned any value yet then compare with `current`, else assign an initial value to `computed` where `current` is not `null`.
    if (current != null && (computed === undefined || current < computed)) {
      computed = current; // Store the calculated value of the current `result`.
      result = value;
    }
  }

  return result;
}
