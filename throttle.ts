/**
 * Throttling is a technique used to control how many times we allow a function to be executed over time. 
 * When a JavaScript function is said to be throttled with a wait time of X milliseconds, 
 * it can only be invoked at most once every X milliseconds. The callback is invoked immediately and 
 * cannot be invoked again for the rest of the wait duration.
 * Implement a throttle function which accepts a callback function and a wait duration. Calling throttle() returns a function which throttled invocations of the callback function following the behavior described above.
 */
/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait = 0) {
  let shouldThrottle = false;

  return function (...args) {
    if (shouldThrottle) {
      return;
    }

    shouldThrottle = true;
    setTimeout(function () {
      shouldThrottle = false;
    }, wait);

    func.apply(this, args);
  };
}
