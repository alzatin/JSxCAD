import { fromSurface, toSurface } from './convert';

import { doesNotOverlap } from '@jsxcad/geometry-z0surface';
import polygonClipping from 'polygon-clipping';

/**
 * Return a surface representing the difference between the first surface
 *   and the rest of the surfaces.
 * The difference of no surfaces is the empty surface.
 * The difference of one surface is that surface.
 * @param {Array<surface>} surfaces - the surfaces.
 * @returns {surface} - the resulting surface
 * @example
 * let C = difference(A, B)
 * @example
 * +-------+            +-------+
 * |       |            |   C   |
 * |   A   |            |       |
 * |    +--+----+   =   |    +--+
 * +----+--+    |       +----+
 *      |   B   |
 *      |       |
 *      +-------+
 */
export const difference = (...z0Surfaces) => {
  if (z0Surfaces.length === 0) {
    return [];
  }
  if (z0Surfaces.length === 1) {
    return z0Surfaces[0];
  }
  const input = z0Surfaces.map(z0Surface => fromSurface(z0Surface));
console.log(`QQ/input: ${JSON.stringify(input)}`);
  const result = polygonClipping.difference(...input);
  return toSurface(result);
};
