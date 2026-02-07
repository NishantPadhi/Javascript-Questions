/**
 *
Implement a function maxBy(array, iteratee) that finds the element inside array with the maximum value after going through iteratee. The iteratee is invoked with one argument: (value).

Arguments
array (Array): The array to iterate over.
iteratee (Function): The iteratee invoked per element.
Returns
(*): Returns the maximum value.
*/

/**
 *
maxBy([{ n: 1 }, { n: 2 }], (o) => o.n); // => { n: 2 }

maxBy([1, 2], (o) => -o); // => 1
The function should ignore elements where iteratee produces null or undefined.


maxBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => undefined
*/

/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 */
export default function maxBy(array, iteratee) {
  let result, computed;

  // Iterate through array to find the maximum `result`.
  for (const value of array) {
    const current = iteratee(value);
    // Check whether `computed` is assigned any value yet then compare with `current`, else assign an initial value to `computed` where `current` is not `null`.
    if (current != null && (computed === undefined || current > computed)) {
      computed = current; // Store the calculated value of the current `result`.
      result = value;
    }
  }
  return result;
}
