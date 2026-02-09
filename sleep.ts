/**
 *
In JavaScript, the setTimeout function can be used to execute callbacks after a delay. However, it introduces a layer of nesting in the code which may not be desired. It'd be nice to use setTimeout in this fashion:


// Note: the following code contains invalid syntax and doesn't work.
console.log('Hello!');
setTimeout(1000);
console.log('Bye.');

*/

/**
 * Example
async function greeting() {
  console.log('Hello!');
  await sleep(2000);
  console.log('Bye.'); // Only logs after 2000 milliseconds (2 seconds)
}

greeting();
// t = 0: Hello!
// t = 2000: Bye.

*/