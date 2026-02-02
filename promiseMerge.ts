/**
 *
Implement a function that accepts two promises and returns a single Promise. This returned promise fulfills when both input promises fulfill, with a single value according to the order and types of the fulfillment values:

Numbers should be added together.
Strings should be concatenated.
Arrays should be combined into a single array.
Plain objects should be merged into a single object.
Other types aren't supported.
The return promise can also be rejected if one of the following happens:

The types of the fulfilled results do not match, reject with the string 'Unsupported data types'.
One of the promises fail, reject with the rejected promise's reason.

*/