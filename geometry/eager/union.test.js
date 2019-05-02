import { rotateZ as rotateSurface, scale as scaleSurface } from '@jsxcad/geometry-surface';
import { scale as scaleSolid, fromPolygons as solidFromPolygons, translate as translateSolid } from '@jsxcad/geometry-solid';
import { unitCubePolygons, unitRegularTrianglePolygon, unitSquarePolygon } from '@jsxcad/data-shape';

import { canonicalize } from './canonicalize';
import { test } from 'ava';
import { union } from './union';

test('Surface', t => {
  const unioned = union({ assembly: [{ z0Surface: [unitSquarePolygon] }] },
                        { z0Surface: scaleSurface([0.8, 0.8, 0.8], rotateSurface(Math.PI / 2, [unitRegularTrianglePolygon])) });
  t.deepEqual(canonicalize(unioned),
              { 'assembly': [{ 'z0Surface': [[[-0.69282, -0.4, 0], [-0.5, -0.4, 0], [-0.5, -0.5, 0], [0.5, -0.5, 0], [0.5, -0.4, 0], [0.69282, -0.4, 0], [0.5, -0.06603, 0], [0.5, 0.5, 0], [0.17321, 0.5, 0], [0, 0.8, 0], [-0.1732, 0.5, 0], [-0.5, 0.5, 0], [-0.5, -0.06603, 0]]] }] });
});

test('Solid', t => {
  const unioned = union({ solid: translateSolid([0, 0, 0], scaleSolid([10, 10, 10], solidFromPolygons({}, unitCubePolygons))) },
                        { solid: translateSolid([2, 2, 0], scaleSolid([10, 10, 10], solidFromPolygons({}, unitCubePolygons))) },
                        { solid: translateSolid([4, 4, 0], scaleSolid([10, 10, 10], solidFromPolygons({}, unitCubePolygons))) });
  t.deepEqual(canonicalize(unioned),
              { 'assembly': [{ 'solid': [[[[9, -1, -5], [-1, -1, -5], [-1, 9, -5], [9, 9, -5]]], [[[-5, -5, -5], [-5, -1, -5], [5, -1, -5], [5, -5, -5]]], [[[7, -1, -5], [7, -3, -5], [5, -3, -5], [5, -1, -5]]], [[[-5, 5, -5], [-1, 5, -5], [-1, -1, -5], [-5, -1, -5]]], [[[-3, 7, -5], [-1, 7, -5], [-1, 5, -5], [-3, 5, -5]]], [[[7, -1, -5], [9, -1, -5], [9, -1, 5], [7, -1, 5]]], [[[5, -5, -5], [5, -5, 5], [-5, -5, 5], [-5, -5, -5]]], [[[-5, -3, -5], [-5, -5, -5], [-5, -5, 5], [-5, -3, 5]]], [[[-5, -1, -5], [-5, -3, -5], [-5, -3, 5], [-5, -1, 5]]], [[[7, -3, 5], [7, -3, -5], [7, -1, -5], [7, -1, 5]]], [[[5, -1, 5], [5, -3, 5], [7, -3, 5], [7, -1, 5]]], [[[5, -5, 5], [5, -3, 5], [-5, -3, 5], [-5, -5, 5]]], [[[-5, -1, 5], [-5, -3, 5], [-3, -3, 5], [-3, -1, 5]]], [[[-3, -1, 5], [-3, -3, 5], [5, -3, 5], [5, -1, 5]]], [[[5, -5, -5], [5, -3, -5], [5, -3, 5], [5, -5, 5]]], [[[5, -3, -5], [7, -3, -5], [7, -3, 5], [5, -3, 5]]], [[[-1, 9, -5], [-1, 7, -5], [-1, 7, 5], [-1, 9, 5]]], [[[-5, 5, 5], [-5, 5, -5], [-5, -1, -5], [-5, -1, 5]]], [[[-1, 7, -5], [-3, 7, -5], [-3, 7, 5], [-1, 7, 5]]], [[[-3, 5, -5], [-5, 5, -5], [-5, 5, 5], [-3, 5, 5]]], [[[-3, 7, -5], [-3, 5, -5], [-3, 5, 5], [-3, 7, 5]]], [[[-3, 5, 5], [-1, 5, 5], [-1, 7, 5], [-3, 7, 5]]], [[[-5, 5, 5], [-5, -1, 5], [-3, -1, 5], [-3, 5, 5]]], [[[-1, 5, 5], [-3, 5, 5], [-3, -1, 5], [-1, -1, 5]]], [[[-1, 9, -5], [-1, 9, 5], [9, 9, 5], [9, 9, -5]]], [[[9, 7, -5], [9, 9, -5], [9, 9, 5], [9, 7, 5]]], [[[9, -1, -5], [9, 7, -5], [9, 7, 5], [9, -1, 5]]], [[[9, 7, 5], [9, 9, 5], [-1, 9, 5], [-1, 7, 5]]], [[[7, -1, 5], [9, -1, 5], [9, 7, 5], [7, 7, 5]]], [[[-1, -1, 5], [7, -1, 5], [7, 7, 5], [-1, 7, 5]]]] }] });
});
