/**
 * When fetching data or performing other async operations, it is sometimes useful to set a timeout duration, i.e. enforce that a response is received before the timeout, otherwise deem the request a failed one.

Implement a promiseTimeout function that accepts a promise and a timeout duration (in milliseconds) and returns a Promise. If the promise argument is settled within the timeout period, the returned promise is settled with the promise argument's settled value, which can be both resolved/rejected values. Otherwise, the returned promise will reject with the string "Promise timeout".
 */

