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

export const overcutCorners = (shape) => {
  
  var overcutPoints = [];
  
  shape.center().section().outline().geometry.paths.forEach(path => {
    var points = path
    points.push(path[0])
    points.push(path[1])
    var i = 1;
    while(i < points.length - 2){
      const v1 = subtract(points[i-1], points[i])
      const v2 = subtract(points[i], points[i+1])
      const dotProduct = dot(v1, v2);
      const crossProduct = cross(v1, v2)[3];
      const angleComputed = angle(v1, v2);
      console.log(crossProduct)
      if(Math.abs(angleComputed - 1.570) < .01){ //We have a sharp angle
        overcutPoints.push(points[i]);
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
