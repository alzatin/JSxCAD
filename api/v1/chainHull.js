import { buildConvexHull, buildConvexSurfaceHull } from '@jsxcad/algorithm-shape';

import { Shape } from './Shape';
import { union } from './union';

/**
 *
 * # Chain Hull
 *
 * Builds a convex hull between adjacent pairs in a sequence of shapes.
 *
 * ::: illustration { "view": { "position": [30, 30, 30] } }
 * ```
 * chainHull(Cube(3).translate([-5, 5]),
 *           Sphere(3).translate([5, -5]),
 *           Cylinder(3, 10).translate([-10, -10]))
 *   .translate([10, 10])
 * ```
 * :::
 * ::: illustration { "view": { "position": [80, 80, 0] } }
 * ```
 * chainHull(Circle(20).translate([0, 0, -10]),
 *           Circle(10),
 *           Circle(20).translate([0, 0, 10]))
 * ```
 * :::
 *
 **/

const Z = 2;

export const chainHull = (...shapes) => {
  const pointsets = shapes.map(shape => shape.toPoints());
  const chain = [];
  for (let nth = 1; nth < pointsets.length; nth++) {
    const points = [...pointsets[nth - 1], ...pointsets[nth]];
    if (points.every(point => point[Z] === 0)) {
      chain.push(Shape.fromGeometry(buildConvexSurfaceHull(points)));
    } else {
      chain.push(Shape.fromGeometry(buildConvexHull(points)));
    }
  }
  return union(...chain);
};
