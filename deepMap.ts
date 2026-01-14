/**
 * Implement a function deepMap(value, fn) to return a new value containing 
 * the results of calling a provided function on every non-Array and non-Object element in the value input, 
 * including elements within nested Arrays and Objects. The function fn is called with a single argument, 
 * the element that is being mapped/transformed.
 */
/**
 * @param {any} value
 * @param {Function} fn
 * @returns any
 */
export default function deepMap(value, fn) {
  return mapHelper(value, fn, value);
}

function isPlainObject(value) {
  if (value == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

function mapHelper(element, fn, original) {
  // Handle arrays.
  if (Array.isArray(element)) {
    return element.map((item) => mapHelper(item, fn, original));
  }

  // Handle plain objects.
  if (isPlainObject(element)) {
    return Object.fromEntries(
      Object.entries(element).map(([key, value]) => [
        key,
        mapHelper(value, fn, original),
      ]),
    );
  }

  // Handle other types.
  return fn.call(original, element);
}
