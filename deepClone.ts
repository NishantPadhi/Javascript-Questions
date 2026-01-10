/**
 * Note: This is an advanced version of the Deep Clone question,
 * which you should complete first before attempting this question.
 *
 * It is not realistic to expect candidates to produce a complete deep clone solution in typical interview settings, though the interviewer might ask you a simple version a la Deep Clone and engage you in a discussion regarding the edge cases and how you would handle them.
 *
 * Implement a deepClone function that performs a deep clone as thoroughly as possible, while also handling the following:
 *
 * The input object can contain any data type.
 * Handle the edge case where the input object is cyclic, i.e. the circular references should also be cloned.
 */

function isPrimitiveTypeOrFunction(value) {
  return (
    typeof value !== 'object' || typeof value === 'function' || value === null
  );
}

function getType(value) {
  const type = typeof value;
  if (type !== 'object') {
    return type;
  }

  return Object.prototype.toString
    .call(value)
    .replace(/^\[object (\S+)\]$/, '$1')
    .toLowerCase();
}

function deepCloneWithCache(value, cache) {
  if (isPrimitiveTypeOrFunction(value)) {
    return value;
  }

  const type = getType(value);

  if (type === 'set') {
    const cloned = new Set();
    value.forEach((item) => {
      cloned.add(deepCloneWithCache(item, cache));
    });
    return cloned;
  }

  if (type === 'map') {
    const cloned = new Map();
    value.forEach((value_, key) => {
      cloned.set(key, deepCloneWithCache(value_, cache));
    });
    return cloned;
  }

  if (type === 'function') {
    return value;
  }

  if (type === 'array') {
    return value.map((item) => deepCloneWithCache(item));
  }

  if (type === 'date') {
    return new Date(value);
  }

  if (type === 'regexp') {
    return new RegExp(value);
  }

  if (cache.has(value)) {
    return cache.get(value);
  }

  const cloned = Object.create(Object.getPrototypeOf(value));

  cache.set(value, cloned);
  for (const key of Reflect.ownKeys(value)) {
    const item = value[key];
    cloned[key] = isPrimitiveTypeOrFunction(item)
      ? item
      : deepCloneWithCache(item, cache);
  }

  return cloned;
}

/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
  return deepCloneWithCache(value, new Map());
}
