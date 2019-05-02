import { fromTranslation } from '@jsxcad/math-mat4';
import { intersection } from './intersection';
import { test } from 'ava';
import { transform } from '@jsxcad/geometry-polygons';

const cubePolygons = [[[-1, -1, -1], [-1, -1, 1], [-1, 1, 1], [-1, 1, -1]],
                      [[1, -1, -1], [1, 1, -1], [1, 1, 1], [1, -1, 1]],
                      [[-1, -1, -1], [1, -1, -1], [1, -1, 1], [-1, -1, 1]],
                      [[-1, 1, -1], [-1, 1, 1], [1, 1, 1], [1, 1, -1]],
                      [[-1, -1, -1], [-1, 1, -1], [1, 1, -1], [1, -1, -1]],
                      [[-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]]];

test('Self intersection', t => {
  t.deepEqual(intersection(cubePolygons, cubePolygons),
              cubePolygons);
});

test('Overlapping intersection', t => {
  const solid = intersection(transform(fromTranslation([0.5, 0.5, 0.5]), cubePolygons), cubePolygons);
  t.deepEqual(solid, [[[-0.5, -0.125, 1], [-0.5, -0.5, -0.5], [-0.5, -0.5, 1]], [[-0.5, -0.5, -0.5], [-0.5, -0.125, 1], [-0.5, 1, -0.5]], [[-0.5, -0.125, 1], [-0.5, 1, 1], [-0.5, 1, -0.5]], [[-0.125, -0.5, 1], [-0.5, -0.5, -0.5], [1, -0.5, -0.5]], [[-0.5, -0.5, -0.5], [-0.125, -0.5, 1], [-0.5, -0.5, 1]], [[-0.125, -0.5, 1], [1, -0.5, -0.5], [1, -0.5, 1]], [[-0.125, 1, -0.5], [-0.5, -0.5, -0.5], [-0.5, 1, -0.5]], [[-0.5, -0.5, -0.5], [-0.125, 1, -0.5], [1, -0.5, -0.5]], [[-0.125, 1, -0.5], [1, 1, -0.5], [1, -0.5, -0.5]], [[1, -0.5, 1], [1, -0.5, -0.5], [1, 0.625, -0.5]], [[1, 1, -0.5], [1, 1, 1], [1, 0.625, -0.5]], [[1, -0.5, 1], [1, 0.625, -0.5], [1, 1, 1]], [[1, 1, 1], [1, 1, -0.5], [-0.125, 1, -0.5]], [[-0.5, 1, -0.5], [-0.5, 1, 1], [-0.125, 1, -0.5]], [[1, 1, 1], [-0.125, 1, -0.5], [-0.5, 1, 1]], [[-0.5, 1, 1], [-0.5, -0.5, 1], [0.625, -0.5, 1]], [[1, -0.5, 1], [1, 1, 1], [0.625, -0.5, 1]], [[-0.5, 1, 1], [0.625, -0.5, 1], [1, 1, 1]]]);
});
