/**
 * Implement a function deepEqual that performs a deep comparison between two values. 
 * It returns true if two input values are deemed equal, and returns false if not.
 * You can assume there are only JSON-serializable values (numbers, strings, boolean, null, objects, arrays).
 * There wouldn't be cyclic objects, i.e. objects with circular references.
 */
/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(valueA, valueB) {
  // Check primitives for equality.
  if (Object.is(valueA, valueB)) {
    return true;
  }

  const bothObjects =
    Object.prototype.toString.call(valueA) === '[object Object]' &&
    Object.prototype.toString.call(valueB) === '[object Object]';
  const bothArrays = Array.isArray(valueA) && Array.isArray(valueB);

  // At this point, they can still be primitives but of different types.
  // If they had the same value, they would have been handled earlier in Object.is().
  // So if they're not both objects or both arrays, they're definitely not equal.
  if (!bothObjects && !bothArrays) {
    return false;
  }

  // Compare the keys of arrays and objects.
  if (Object.keys(valueA).length !== Object.keys(valueB).length) {
    return false;
  }

  for (const key in valueA) {
    if (!deepEqual(valueA[key], valueB[key])) {
      return false;
    }
  }

  // All checks passed, the arrays/objects are equal.
  return true;
}
