/**
 * Implement a function uniqueArray that takes in an array and
 * returns a duplicate-free version of the array where only the first occurrence of each element is kept.
 * The order of result values is determined by the order they occur in the array.
 */
export default function uniqueArray(array) {
  const result = [];
  const seen = new Set();

  array.forEach((item) => {
    if (!seen.has(item)) {
      result.push(item);
      seen.add(item);
    }
  });

  return result;
}
