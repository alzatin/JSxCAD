import { assertBoolean, assertEmpty, assertNumber, assertSingle } from './assert';
import { buildRegularPolygon, regularPolygonEdgeLengthToRadius } from '@jsxcad/algorithm-shape';

import { Z0Surface } from './Z0Surface';

const buildSquare = ({ scale = [1, 1, 1] }) => {
  const shape = Z0Surface.fromPath(buildRegularPolygon({ edges: 4 }));
  console.log(`QQ/buildSquare/shape: ${JSON.stringify(shape)}`);
  const transformedShape = shape.rotateZ(45).scale(scale);
  console.log(`QQ/buildSquare/transformedShape: ${JSON.stringify(transformedShape)}`);
  return transformedShape;
};

const decode = (params) => {
  const edgeScale = regularPolygonEdgeLengthToRadius(1, 4);

  // square({ size: [2,4], center: true }); // 2x4, center: false (default)
  try {
    const { size, center = false } = params[0];
    const [length, width] = size;
    assertNumber(length);
    assertNumber(width);
    assertBoolean(center);
    return { scale: [edgeScale * length, edgeScale * width] };
  } catch (e) {}

  // square([2,4]}); // 2x4, center: false (default)
  try {
    const [length, width] = params[0];
    assertNumber(length);
    assertNumber(width);
    return { scale: [edgeScale * length, edgeScale * width] };
  } catch (e) {};

  // square(1); // 2x4, center: false (default)
  try {
    const [length] = params;
    assertNumber(length);
    assertSingle(params);
    return { scale: [edgeScale * length, edgeScale * length] };
  } catch (e) {};

  // square()
  try {
    assertEmpty(params);
    return {};
  } catch (e) {};

  throw Error(`Unsupported interface for square: ${JSON.stringify(params)}`);
};

/**
 *
 * square();                                   // openscad like
 * square(1);                                  // 1x1
 * square([2,3]);                              // 2x3
 * square({size: [2,4], center: true});        // 2x4, center: false (default)
 *
 */
export const square = (...params) => buildSquare(decode(params));
