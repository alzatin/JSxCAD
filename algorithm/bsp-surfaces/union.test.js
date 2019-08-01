import { fromPolygons, toGeneric, transform } from '@jsxcad/geometry-solid';

import { fromTranslation } from '@jsxcad/math-mat4';
import test from 'ava';
import { union } from './union';

// Producing duplicate paths within surfaces.

const cubePolygons = [[[-1, -1, -1], [-1, -1, 1], [-1, 1, 1], [-1, 1, -1]],
                      [[1, -1, -1], [1, 1, -1], [1, 1, 1], [1, -1, 1]],
                      [[-1, -1, -1], [1, -1, -1], [1, -1, 1], [-1, -1, 1]],
                      [[-1, 1, -1], [-1, 1, 1], [1, 1, 1], [1, 1, -1]],
                      [[-1, -1, -1], [-1, 1, -1], [1, 1, -1], [1, -1, -1]],
                      [[-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]]];

test('Self union', t => {
  const unioned = union(fromPolygons({}, cubePolygons),
                        fromPolygons({}, cubePolygons));
  t.deepEqual(toGeneric(unioned),
              [[[[-1, -1, -1], [-1, -1, 1], [-1, 1, 1], [-1, 1, -1]]], [[[1, -1, 1], [1, -1, -1], [1, 1, -1], [1, 1, 1]]], [[[-1, -1, 1], [-1, -1, -1], [1, -1, -1], [1, -1, 1]]], [[[-1, 1, -1], [-1, 1, 1], [1, 1, 1], [1, 1, -1]]], [[[-1, -1, -1], [-1, 1, -1], [1, 1, -1], [1, -1, -1]]], [[[-1, 1, 1], [-1, -1, 1], [1, -1, 1], [1, 1, 1]]]]);
});

test('Overlapping 1 union', t => {
  const unioned = union(transform(fromTranslation([0.5, 0.0, 0.0]), fromPolygons({}, cubePolygons)),
                        fromPolygons({}, cubePolygons));
  t.deepEqual(toGeneric(unioned),
              [[[[1.5, -1, 1], [1.5, -1, -1], [1.5, 1, -1], [1.5, 1, 1]]], [[[-1, -1, 1], [-1, -1, -1], [1.5, -1, -1], [1.5, -1, 1]]], [[[-1, 1, -1], [-1, 1, 1], [1.5, 1, 1], [1.5, 1, -1]]], [[[-1, -1, -1], [-1, 1, -1], [1.5, 1, -1], [1.5, -1, -1]]], [[[-1, 1, 1], [-1, -1, 1], [1.5, -1, 1], [1.5, 1, 1]]], [[[-1, -1, -1], [-1, -1, 1], [-1, 1, 1], [-1, 1, -1]]]]);
});

test('Overlapping union', t => {
  const unioned = union(transform(fromTranslation([0.5, 0.5, 0.5]), fromPolygons({}, cubePolygons)),
                        fromPolygons({}, cubePolygons));
  t.deepEqual(toGeneric(unioned),
              [[[[1.5, -0.5, 1.5], [1.5, -0.5, -0.5], [1.5, 1.5, -0.5], [1.5, 1.5, 1.5]]], [[[1, -0.5, 1.5], [1, -0.5, -0.5], [1.5, -0.5, -0.5], [1.5, -0.5, 1.5]], [[-0.5, -0.5, 1.5], [-0.5, -0.5, 1], [1, -0.5, 1], [1, -0.5, 1.5]]], [[[1, 1.5, -0.5], [1, 1.5, 1.5], [1.5, 1.5, 1.5], [1.5, 1.5, -0.5]], [[-0.5, 1.5, -0.5], [-0.5, 1.5, 1.5], [1, 1.5, 1.5], [1, 1.5, -0.5]]], [[[-0.5, 1, -0.5], [-0.5, 1.5, -0.5], [1, 1.5, -0.5], [1, 1, -0.5]], [[1, -0.5, -0.5], [1, 1.5, -0.5], [1.5, 1.5, -0.5], [1.5, -0.5, -0.5]]], [[[-0.5, 1.5, 1.5], [-0.5, -0.5, 1.5], [1.5, -0.5, 1.5], [1.5, 1.5, 1.5]]], [[[-0.5, -0.5, 1], [-0.5, -0.5, 1.5], [-0.5, 1, 1.5], [-0.5, 1, 1]], [[-0.5, 1, -0.5], [-0.5, 1, 1.5], [-0.5, 1.5, 1.5], [-0.5, 1.5, -0.5]]], [[[-1, -1, -1], [-1, -1, 1], [-1, 1, 1], [-1, 1, -1]]], [[[-1, -1, 1], [-1, -1, -1], [-0.5, -1, -1], [-0.5, -1, 1]], [[-0.5, -1, 1], [-0.5, -1, -1], [1, -1, -1], [1, -1, 1]]], [[[1, 1, -0.5], [1, 1, -1], [-0.5, 1, -1], [-0.5, 1, -0.5]], [[-1, 1, -1], [-1, 1, 1], [-0.5, 1, 1], [-0.5, 1, -1]]], [[[-1, -1, -1], [-1, 1, -1], [1, 1, -1], [1, -1, -1]]], [[[-1, 1, 1], [-1, -1, 1], [-0.5, -1, 1], [-0.5, 1, 1]], [[-0.5, -0.5, 1], [-0.5, -1, 1], [1, -1, 1], [1, -0.5, 1]]], [[[1, -1, 1], [1, -1, -1], [1, -0.5, -1], [1, -0.5, 1]], [[1, -0.5, -0.5], [1, -0.5, -1], [1, 1, -1], [1, 1, -0.5]]]]);
});
