import { toGeneric, transform } from '@jsxcad/algorithm-polygons';

import { fromTranslation } from '@jsxcad/math-mat4';
import { test } from 'ava';
import { union } from './union';

const cubePolygons = [[[-1, -1, -1], [-1, -1, 1], [-1, 1, 1], [-1, 1, -1]],
                      [[1, -1, -1], [1, 1, -1], [1, 1, 1], [1, -1, 1]],
                      [[-1, -1, -1], [1, -1, -1], [1, -1, 1], [-1, -1, 1]],
                      [[-1, 1, -1], [-1, 1, 1], [1, 1, 1], [1, 1, -1]],
                      [[-1, -1, -1], [-1, 1, -1], [1, 1, -1], [1, -1, -1]],
                      [[-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]]];

test('Self union', t => {
  const unioned = union(cubePolygons, cubePolygons);
  t.deepEqual(toGeneric(unioned), cubePolygons);
});

test('Overlapping union', t => {
  t.deepEqual(toGeneric(union(transform(fromTranslation([0.5, 0.5, 0.5]), cubePolygons),
                              cubePolygons)),
              [[[-0.5, 1.5, -0.5], [-0.5, 1, -0.5], [-0.5, 1, 1.5], [-0.5, 1.5, 1.5]], [[-0.5, 1, 1.5], [-0.5, 1, 1], [-0.5, -0.5, 1], [-0.5, -0.5, 1.5]], [[-1, -1, -1], [-1, -1, 1], [-1, 1, 1], [-1, 1, -1]], [[-1, -1, 1], [-1, -1, -1], [-0.5, -1, -1], [-0.5, -1, 1]], [[-0.5, 1, -1], [-1, 1, -1], [-1, 1, 1], [-0.5, 1, 1]], [[-0.5, -1, -1], [-1, -1, -1], [-1, 1, -1], [-0.5, 1, -1]], [[-1, 1, 1], [-1, -1, 1], [-0.5, -1, 1], [-0.5, 1, 1]], [[1.5, -0.5, -0.5], [1.5, 1.5, -0.5], [1.5, 1.5, 1.5], [1.5, -0.5, 1.5]], [[1, -0.5, -0.5], [1.5, -0.5, -0.5], [1.5, -0.5, 1.5], [1, -0.5, 1.5]], [[1, -0.5, 1.5], [-0.5, -0.5, 1.5], [-0.5, -0.5, 1], [1, -0.5, 1]], [[1, -1, 1], [1, -1, -1], [1, -0.5, -1], [1, -0.5, 1]], [[-0.5, -1, -1], [1, -1, -1], [1, -1, 1], [-0.5, -1, 1]], [[1, -0.5, -1], [1, -1, -1], [-0.5, -1, -1], [-0.5, -0.5, -1]], [[-0.5, -0.5, 1], [-0.5, -1, 1], [1, -1, 1], [1, -0.5, 1]], [[1.5, 1.5, -0.5], [1, 1.5, -0.5], [1, 1.5, 1.5], [1.5, 1.5, 1.5]], [[1, 1.5, -0.5], [-0.5, 1.5, -0.5], [-0.5, 1.5, 1.5], [1, 1.5, 1.5]], [[1.5, -0.5, -0.5], [1, -0.5, -0.5], [1, 1.5, -0.5], [1.5, 1.5, -0.5]], [[1, 1.5, -0.5], [1, 1, -0.5], [-0.5, 1, -0.5], [-0.5, 1.5, -0.5]], [[1, -0.5, -0.5], [1, -0.5, -1], [1, 1, -1], [1, 1, -0.5]], [[1, 1, -0.5], [1, 1, -1], [-0.5, 1, -1], [-0.5, 1, -0.5]], [[1, 1, -1], [1, -0.5, -1], [-0.5, -0.5, -1], [-0.5, 1, -1]], [[1, -0.5, 1.5], [1.5, -0.5, 1.5], [1.5, 1.5, 1.5], [1, 1.5, 1.5]], [[1, 1.5, 1.5], [-0.5, 1.5, 1.5], [-0.5, 1, 1.5], [1, 1, 1.5]], [[-0.5, 1, 1.5], [-0.5, -0.5, 1.5], [1, -0.5, 1.5], [1, 1, 1.5]]]);
});
