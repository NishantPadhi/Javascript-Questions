/**
 * Implement a sum function that accepts a number and allows for repeated calling with more numbers. 
 * Calling the function without an argument will sum up all the arguments thus far and return the total.
 */
/**
 * @param {number} valueA
 * @return {Function}
 */
export default function sum(valueA) {
  return function (valueB) {
    return valueB === undefined ? valueA : sum(valueA + valueB);
  };
}

// Examples
sum(1)(); // 1
sum(1)(2)(); // 3
sum(1)(2)(-3)(); // 0
