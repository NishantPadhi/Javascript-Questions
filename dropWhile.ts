/**
 * Given a predicate function and an array, implement a function dropWhile(array, predicate). This function should create a slice of array excluding elements dropped from the start of the list. Elements are dropped until predicate returns falsey. Your function should not modify the original array. The array may or may not be in sorted order.

Arguments
array (Array): The array to query.
predicate (Function): The function invoked per iteration.
Predicate signature: The predicate function is invoked with three arguments: (value, index, array). You must invoke it with all three arguments.

value: The current element being iterated.
index: The index of the current element.
array: The original input array.
Returns
(Array): Returns the slice of array containing the kept elements.
 */