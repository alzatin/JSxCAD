import { splitPolygon } from './splitPolygon';
import { toPlane } from '@jsxcad/math-poly3';

const FRONT = 1;
const BACK = 2;
const COPLANAR_FRONT = 4;
const COPLANAR_BACK = 5;

// Remove from surfaces those parts that are inside the solid delineated by bsp.
export const removeExteriorPolygons = (bsp, polygons, alsoRemoveCoplanarBack = false) => {
  if (bsp === null || bsp.same === null || polygons === null) {
    throw Error('die');
  }
  if (polygons.length === 0) {
    return null;
  }
  const plane = bsp.plane;
  let front = null;
  let back = null;

  const emit = (polygon, kind) => {
    switch (kind) {
      case COPLANAR_BACK:
        if (alsoRemoveCoplanarBack) {
          if (front === null) { front = [polygon]; } else { front.push(polygon); }
        } else {
          if (back === null) { back = [polygon]; } else { back.push(polygon); }
        }
        break;
      case BACK:
        if (back === null) { back = [polygon]; } else { back.push(polygon); }
        break;
      case COPLANAR_FRONT:
      case FRONT:
        if (front === null) { front = [polygon]; } else { front.push(polygon); }
        break;
      default:
        throw Error('die');
    }
  };

  for (let i = 0; i < polygons.length; i++) {
    splitPolygon(plane, polygons[i], emit);
  }

  if (bsp.front !== null && front !== null) {
    front = removeExteriorPolygons(bsp.front, front, alsoRemoveCoplanarBack);
  } else {
    front = null;
  }

  if (bsp.back !== null && back !== null) {
    back = removeExteriorPolygons(bsp.back, back, alsoRemoveCoplanarBack);
  }

  if (front === null) {
    if (back === null) { return null; } else { return back; }
  } else {
    if (back === null) { return front; } else { return front.concat(front, back); }
  }
};
