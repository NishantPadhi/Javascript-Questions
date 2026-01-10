/**
 * Implement a function compose that takes multiple functions as arguments and
 * returns a new function that applies those functions in reverse order. 
 * The output of one function becomes the input of the next function, creating a chain of function compositions.
 * If there are no functions passed to the compose function,
 * the default behavior is to return a new function that simply returns the input it receives.
 * In other words, the default behavior of compose without any functions results in a simple identity function.
 */
/**
 * @param {...Function} args
 * @returns Function
 */
export default function compose(...fns) {
  return function (x) {
    let result = x;

    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }

    return result;
  };
}
