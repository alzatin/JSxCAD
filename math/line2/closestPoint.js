import { direction } from './direction';
import { fromValues } from '@jsxcad/math-vec2';
import { origin } from './origin';

/**
 * Determine the closest point on the given line to the given point.
 * Thanks to @khrismuc
 *
 * @param {vec2} point the point of reference
 * @param {line2} line the 2D line for calculations
 * @returns {vec2} a new point
 */
export const closestPoint = (point, line) => {
  // linear function of AB
  const a = origin(line);
  const b = direction(line);
  const m1 = (b[1] - a[1]) / (b[0] - a[0]);
  const t1 = a[1] - m1 * a[0];
  // linear function of PC
  const m2 = -1 / m1; // perpendicular
  const t2 = point[1] - m2 * point[0];
  // c.x * m1 + t1 === c.x * m2 + t2
  const x = (t2 - t1) / (m1 - m2);
  const y = m1 * x + t1;

  return fromValues(x, y);
};
