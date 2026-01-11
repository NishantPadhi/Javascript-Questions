/**
 * By now you'd be familiar with mapping of elements in an array.
 * If you aren't, please first do the Array.prototype.map question first.
 *
 * What if the mapping function is not a synchronous function i.e. 
 * it returns a promise? Array.prototype.map assumes the mapping function is synchronous and will fail to work properly.
 *
 * Implement a function mapAsync that accepts an array of items and maps each element with an 
 * asynchronous mapping function. The function should return a Promise which resolves to the mapped results.
 */
/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 *
 * @return {Promise}
 */
export default function mapAsync(iterable, callbackFn) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach((item, index) => {
      callbackFn(item)
        .then((value) => {
          results[index] = value;
          unresolved -= 1;

          if (unresolved === 0) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}
