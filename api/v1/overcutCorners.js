import { add, negate, scale, angle, dot, cross, subtract } from '@jsxcad/math-vec3';

import { Circle } from './Circle';
import { union } from './union';
import { difference } from './difference';
import { Shape } from './Shape';
import { measureBoundingBox } from './measureBoundingBox';

/**
 *
 * # Center
 *
 * Moves the shape so that it is centered on the origin.
 *
 * ::: illustration { "view": { "position": [100, 100, 100] } }
 * ```
 * Cube({ corner1: [30, -30, 10],
 *        corner2: [10, -10, 0] })
 * ```
 * :::
 * ::: illustration { "view": { "position": [100, 100, 100] } }
 * ```
 * Cube({ corner1: [30, -30, 10],
 *        corner2: [10, -10, 0] })
 *   .center()
 * ```
 * :::
 **/

const angle2 = (x1, y1, x2, y2) => {
    // Use dotproduct to find angle between vectors
    // This always returns an angle between 0, pi
    const numer = (x1 * x2 + y1 * y2)
    const denom = Math.sqrt((x1 ** 2 + y1 ** 2) * (x2 ** 2 + y2 ** 2))
    return Math.acos(numer / denom) 
}
    
const cross_sign = (x1, y1, x2, y2) => {
    // True if cross is positive
    // False if negative or zero
    return x1 * y2 > x2 * y1
}


export const overcutCorners = (shape) => {
  
  var overcutPoints = [];
  
  shape.center().section().outline().geometry.paths.forEach(path => {
    var points = path
    points.push(path[0])
    points.push(path[1])
    var i = 2;
    while(i < points.length){
      const p1 = points[i]
      const ref = points[i - 1]
      const p2 = points[i - 2]
      const x1 = p1[0] - ref[0]
      const y1 = p1[1] - ref[1]
      const x2 = p2[0] - ref[0]
      const y2 = p2[1] - ref[1]

      const angleComputed = angle2(x1, y1, x2, y2)
      console.log(cross_sign(x1, y1, x2, y2))
      if(cross_sign(x1, y1, x2, y2)){ //We have a sharp angle
        overcutPoints.push(ref);
      }
      i++;
    }
  })
  
  var plane = Circle(.1);
  overcutPoints.forEach(point => {
    plane = union(plane, Circle(1).translate(point));
  })
  
  return difference(shape.center().section(), plane);
};

const method = function () { return overcutCorners(this); };

Shape.prototype.overcutCorners = method;
