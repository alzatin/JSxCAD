import { unitRegularTrianglePolygon, unitSquarePolygon } from '@jsxcad/data-shape';

import { canonicalize } from '@jsxcad/algorithm-surface';
import { pathsToPdf } from '@jsxcad/convert-pdf';
import { test } from 'ava';
import { toZ0Surface } from './toZ0Surface';
import { writeFileSync } from 'fs';

test('Simple', t => {
  const assembly = [{ z0Surface: [unitSquarePolygon], tags: ['a'] },
                    { z0Surface: [unitRegularTrianglePolygon], tags: ['b'] }];
  const z0Surface = toZ0Surface({}, assembly);
  writeFileSync('toZ0Surface.test.simple.pdf', pathsToPdf({}, z0Surface));
  t.deepEqual(canonicalize(z0Surface),
              [[[-0.5, -0.86603, 0], [1, 0, 0], [-0.5, 0.86603, 0]], [[0.13398, -0.5, 0], [0.5, -0.5, 0], [0.5, -0.28868, 0]]]);
});
