import { isObj } from './isObj';

const cool = (a) =>
  Object.freeze(
    Object.entries(a).reduce(
      (total, [key, val]) =>
        isObj(val)
          ? Object.freeze({ ...total, [key]: cool(val) })
          : Object.freeze({ ...total, [key]: val, isFrozen: true }),
      Object.freeze(),
    ),
  );

export { cool };
