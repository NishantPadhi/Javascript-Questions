/**
 * Implement a function that returns a new object after squashing the input object into a single level 
 * of depth where nested keys are "squashed" together with a period delimiter (.).
 */

/**
 *
const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }

*/