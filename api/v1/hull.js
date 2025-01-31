import { buildConvexHull, buildConvexSurfaceHull } from '@jsxcad/algorithm-shape';

import { Shape } from './Shape';

/**
 *
 * # Hull
 *
 * Builds the convex hull of a set of shapes.
 *
 * ::: illustration { "view": { "position": [30, 30, 30] } }
 * ```
 * hull(Point([0, 0, 10]),
 *      Circle(10))
 * ```
 * :::
 * ::: illustration { "view": { "position": [30, 30, 30] } }
 * ```
 * assemble(Point([0, 0, 10]),
 *          Circle(10))
 *   .hull()
 * ```
 * :::
 * ::: illustration { "view": { "position": [30, 30, 30] } }
 * ```
 * Point([0, 0, 10]).hull(Circle(10))
 * ```
 * :::
 * ::: illustration { "view": { "position": [30, 30, 30] } }
 * ```
 * hull(Circle(4),
 *      Circle(2).move(8));
 * ```
 * :::
 *
 **/

const Z = 2;

export const hull = (...shapes) => {
  const points = [];
  shapes.forEach(shape => shape.eachPoint({}, point => points.push(point)));
  // FIX: Detect planar hulls properly.
  if (points.every(point => point[Z] === 0)) {
    return Shape.fromGeometry(buildConvexSurfaceHull(points));
  } else {
    return Shape.fromGeometry(buildConvexHull(points));
  }
};

const method = function (...shapes) { return hull(this, ...shapes); };

Shape.prototype.hull = method;
