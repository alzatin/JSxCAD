import { fromPolygon } from '@jsxcad/math-plane';

export const toPlane = (polygon) => {
  return fromPolygon(polygon);
  if (polygon.plane === undefined) {
    polygon.plane = fromPolygon(polygon);
  }
  return polygon.plane;
};
