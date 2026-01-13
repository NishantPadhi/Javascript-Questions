/**
 * Implement a function rangeRight([start=0], end, [step=1])
 * that creates an array of numbers progressing from start up to (but not including) 
 * end with a specified step, similar to range, but in a descending order.
 *
 * Arguments
 * start (Number): The start of the range.
 * end (Number): The end of the range.
 * step (Number): The value to increment or decrement by.
 */

/**
 * @param {number} start - The start of the range.
 * @param {number} end - The end of the range.
 * @param {number} step - The value to increment or decrement by.
 * @returns {Array<number>} An array of numbers in the specified range.
 */
export default function rangeRight(start, end = undefined, step = 1) {
  const result = [];

  // Adjust parameters if only `end` is provided
  if (end === undefined) {
    end = start;
    start = 0;
  }

  // Adjust `step` for descending sequences
  if (end < start && step === 1) {
    step = -1;
  }

  // Determine the number of elements in `result`
  const length = (end - start) / (step || 1);

  // Generate the range
  for (let i = 0; i < length; i++) {
    result.unshift(start + i * step);
  }

  return result;
}
