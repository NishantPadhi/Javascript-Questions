/**
 * 
Implement a function isEmpty(value) to check if a value is an empty object, collection, map, or set.

Array-like values such as arguments objects, arrays, strings, or jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty if they have a size of 0.

However for this question, we will not consider jQuery-like collections.

Arguments
value (*): The value to check.
Returns
(boolean): Returns true if value is empty, else false.
*/

// Examples
// isEmpty(null); // => true
// isEmpty(true); // => true
// isEmpty(1); // => true
// isEmpty([1, 2, 3]); // => false
// isEmpty({ a: 1 }); // => false

/**
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */
export default function isEmpty(value) {
  if (value == null) {
    return true;
  }

  // Arrays/Strings.
  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0;
  }

  // Maps/Sets.
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  // Plain objects.
  const prototype = Object.getPrototypeOf(value);
  if (prototype === null || prototype === Object.prototype) {
    return Object.keys(value).length === 0;
  }

  return true;
}
