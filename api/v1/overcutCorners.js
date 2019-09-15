import { add, negate, scale } from '@jsxcad/math-vec3';

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
  const points = shape.center().section().outline().geometry.paths[0]
  var i = 1;
  var overcutPoints = [];
  while(i < points.length - 2){
    console.log(points[i]);
    const ax = points[i-1][0] - points[i][0]; //a · b = ax × bx + ay × by
    const ay = points[i-1][1] - points[i][1];
    const bx = points[i][0] - points[i+1][0];
    const by = points[i][1] - points[i+1][1];
    const dotProduct = ax*bx + ay*by;
    if(dotProduct < .01){ //We have a sharp angle
      overcutPoints.push(points[i]);
    }
    i++;
  }
  
  console.log("Overcut points: ");
  console.log(overcutPoints);
  
  return shape;
};

const method = function () { return overcutCorners(this); };

Shape.prototype.overcutCorners = method;
