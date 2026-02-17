/**
 * Implement a function deepOmit(obj, keys) that removes specified keys and their corresponding values from an object, 
 * including nested objects or arrays. It works recursively to traverse through the entire object structure, 
 * ensuring that all occurrences of the specified keys are removed at all levels. The function takes in an object (obj) 
 * and an array of string keys (keys).
*/

// Example
// deepOmit({ a: 1, b: 2, c: 3 }, ['b']); // { a: 1, c: 3 }
/**
 *
const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
  f: [5, 6],
};
deepOmit(obj, ['b', 'c', 'e']); // { a: 1, f: [5, 6] }

*/
/**
 * @param {any} val
 * @param {Array<string>} keys
 * @returns any
 */
export default function deepOmit(val, keys) {
  if (!Array.isArray(val) && !isPlainObject(val)) {
    return val;
  }

  // Both arrays and objects can be traversed using `for...in` statements.
  const newObj = Array.isArray(val) ? [] : {};
  for (const key in val) {
    if (!keys.includes(key)) {
      newObj[key] = deepOmit(val[key], keys);
    }
  }

  return newObj;
}

function isPlainObject(value) {
  if (value == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
