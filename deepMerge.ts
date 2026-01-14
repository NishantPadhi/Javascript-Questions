/**
 * Implement a function deepMerge(objA, objB) to takes in two objects and returns a new object after deep merging them:
 * The resulting object should contain a union of the keys/values of both objects.
 * If the same key is present on both objects, the merged value will be from objB, unless:
 * Both values are arrays: the elements from objB will be appended behind objA's.
 * Both values are objects: merge the objects as per the same rules for deepMerge.
 * Arrays and objects within the merged object should be new instances.
 * The input objects should not be modified.
 */
/**
 * @param {Object|Array} valA
 * @param {Object|Array} valB
 * @returns Object|Array
 */
export default function deepMerge(valA, valB) {
  // Both values are arrays.
  if (Array.isArray(valA) && Array.isArray(valB)) {
    return [...valA, ...valB];
  }

  // Both values are objects.
  if (isPlainObject(valA) && isPlainObject(valB)) {
    const newObj = { ...valA };
    for (const key in valB) {
      if (Object.prototype.hasOwnProperty.call(valA, key)) {
        newObj[key] = deepMerge(valA[key], valB[key]);
      } else {
        newObj[key] = valB[key];
      }
    }
    return newObj;
  }

  // Return the second value as it will "win" in case of an overlap.
  return valB;
}

function isPlainObject(value) {
  if (value == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
