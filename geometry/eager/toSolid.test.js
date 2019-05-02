import { unitCubePolygons, unitRegularTriangularPrismPolygons } from '@jsxcad/data-shape';

import { canonicalize } from './canonicalize';
import { fromPolygons } from '@jsxcad/geometry-solid';
import { test } from 'ava';
import { toSolid } from './toSolid';

/*
FIX: Produces defective geometry
test("FIX", t => {
  const assembly = [{ solid: fromPolygons({}, unitCubePolygons), tags: ['a'] },
                    { solid: fromPolygons({}, unitRegularTetrahedronPolygons), tags: ['b'] }];
  const solid = toSolid({ require: ['a'] }, assembly);
  t.deepEqual(toGeneric(solid),
              [[[[0.5,-0.5,-0.5],[-0.5,-0.5,-0.5],[-0.5,0.5,-0.5],[0.5,0.5,-0.5]]],
               [[[0.5,-0.5,-0.5],[0.5,-0.5,0.5],[-0.5,-0.5,0.5],[-0.5,-0.5,-0.5]]],
               [[[-0.5,-0.5,-0.5],[-0.5,-0.5,0.5],[-0.5,0.5,0.5],[-0.5,0.5,-0.5]]],
               [[[-0.5,0.5,-0.5],[-0.5,0.5,0.5],[0.5,0.5,0.5],[0.5,0.5,-0.5]]],
               [[[0.5,0.5,-0.5],[0.5,0.5,0.5],[0.5,-0.5,0.5],[0.5,-0.5,-0.5]]],
               [[[0.5,0.5,0.5],[-0.5,0.5,0.5],[-0.5,-0.5,0.5],[0.5,-0.5,0.5]]]]);
});
*/

test('Both', t => {
  const assembly = { assembly: [{ solid: fromPolygons({}, unitCubePolygons), tags: ['a'] },
                                { solid: fromPolygons({}, unitRegularTriangularPrismPolygons), tags: ['b'] }] };
  const solid = toSolid({}, assembly);
  t.deepEqual(canonicalize(solid),
              { 'solid': [[[[-0.5, -0.86603, -0.5], [-0.5, -0.86603, 0.5], [-0.5, 0.86603, 0.5], [-0.5, 0.86603, -0.5]]], [[[0.13398, 0.5, -0.5], [-0.5, 0.86603, -0.5], [-0.5, 0.86603, 0.5], [0.13398, 0.5, 0.5]]], [[[1, 0, 0.5], [1, 0, -0.5], [0.5, 0.28868, -0.5], [0.5, 0.28868, 0.5]]], [[[0.13398, 0.5, 0.5], [0.5, 0.5, 0.5], [0.5, 0.5, -0.5], [0.13398, 0.5, -0.5]]], [[[0.5, 0.5, 0.5], [0.5, 0.28868, 0.5], [0.5, 0.28868, -0.5], [0.5, 0.5, -0.5]]], [[[0.13398, 0.5, -0.5], [0.5, 0.5, -0.5], [0.5, 0.28868, -0.5]]], [[[0.13398, 0.5, 0.5], [0.5, 0.28868, 0.5], [0.5, 0.5, 0.5]]], [[[-0.5, -0.86603, -0.5], [0.13398, -0.5, -0.5], [0.13398, -0.5, 0.5], [-0.5, -0.86603, 0.5]]], [[[0.5, -0.28868, -0.5], [1, 0, -0.5], [1, 0, 0.5], [0.5, -0.28868, 0.5]]], [[[0.5, -0.5, 0.5], [0.13398, -0.5, 0.5], [0.13398, -0.5, -0.5], [0.5, -0.5, -0.5]]], [[[0.5, -0.28868, 0.5], [0.5, -0.5, 0.5], [0.5, -0.5, -0.5], [0.5, -0.28868, -0.5]]], [[[0.13398, -0.5, 0.5], [0.5, -0.5, 0.5], [0.5, -0.28868, 0.5]]], [[[0.5, -0.28868, -0.5], [0.5, -0.5, -0.5], [0.13398, -0.5, -0.5]]], [[[-0.5, -0.86603, -0.5], [-0.5, 0.86603, -0.5], [1, 0, -0.5]]], [[[1, 0, 0.5], [-0.5, 0.86603, 0.5], [-0.5, -0.86603, 0.5]]]] });
});

test('Requires A', t => {
  const assembly = { assembly: [{ solid: fromPolygons({}, unitCubePolygons), tags: ['a'] },
                                { solid: fromPolygons({}, unitRegularTriangularPrismPolygons), tags: ['b'] }] };
  const solid = toSolid({ requires: ['b'] }, assembly);
  t.deepEqual(canonicalize(solid),
              { 'solid': [[[[-0.5, -0.86603, -0.5], [-0.5, 0.86603, -0.5], [1, 0, -0.5]]], [[[-0.5, -0.86603, -0.5], [-0.5, -0.86603, 0.5], [-0.5, 0.86603, 0.5], [-0.5, 0.86603, -0.5]]], [[[-0.5, 0.86603, -0.5], [-0.5, 0.86603, 0.5], [1, 0, 0.5], [1, 0, -0.5]]], [[[1, 0, -0.5], [1, 0, 0.5], [-0.5, -0.86603, 0.5], [-0.5, -0.86603, -0.5]]], [[[1, 0, 0.5], [-0.5, 0.86603, 0.5], [-0.5, -0.86603, 0.5]]]] });
});

test('Excludes A', t => {
  const assembly = { assembly: [{ solid: fromPolygons({}, unitCubePolygons), tags: ['a'] },
                                { solid: fromPolygons({}, unitRegularTriangularPrismPolygons), tags: ['b'] }] };
  const solid = toSolid({ excludes: ['a'] }, assembly);
  t.deepEqual(canonicalize(solid),
              { 'solid': [[[[-0.5, -0.86603, -0.5], [-0.5, 0.86603, -0.5], [1, 0, -0.5]]], [[[-0.5, -0.86603, -0.5], [-0.5, -0.86603, 0.5], [-0.5, 0.86603, 0.5], [-0.5, 0.86603, -0.5]]], [[[-0.5, 0.86603, -0.5], [-0.5, 0.86603, 0.5], [1, 0, 0.5], [1, 0, -0.5]]], [[[1, 0, -0.5], [1, 0, 0.5], [-0.5, -0.86603, 0.5], [-0.5, -0.86603, -0.5]]], [[[1, 0, 0.5], [-0.5, 0.86603, 0.5], [-0.5, -0.86603, 0.5]]]] });
});

test('Subassembly', t => {
  const assembly = { assembly: [{ assembly: [{ solid: fromPolygons({}, unitCubePolygons), tags: ['a'] }] },
                                { solid: fromPolygons({}, unitRegularTriangularPrismPolygons), tags: ['b'] }] };

  const solid = toSolid({ excludes: ['b'] }, assembly);
  t.deepEqual(canonicalize(solid),
              { 'solid': [[[[0.13398, 0.5, -0.5], [0.5, 0.5, -0.5], [0.5, 0.28868, -0.5]]], [[[0.5, -0.28868, -0.5], [0.5, -0.5, -0.5], [0.13398, -0.5, -0.5]]], [[[0.5, -0.5, 0.5], [0.13398, -0.5, 0.5], [0.13398, -0.5, -0.5], [0.5, -0.5, -0.5]]], [[[0.13398, 0.5, 0.5], [0.5, 0.5, 0.5], [0.5, 0.5, -0.5], [0.13398, 0.5, -0.5]]], [[[0.5, 0.5, 0.5], [0.5, 0.28868, 0.5], [0.5, 0.28868, -0.5], [0.5, 0.5, -0.5]]], [[[0.5, -0.28868, 0.5], [0.5, -0.5, 0.5], [0.5, -0.5, -0.5], [0.5, -0.28868, -0.5]]], [[[0.13398, 0.5, 0.5], [0.5, 0.28868, 0.5], [0.5, 0.5, 0.5]]], [[[0.13398, -0.5, 0.5], [0.5, -0.5, 0.5], [0.5, -0.28868, 0.5]]], [[[0.5, -0.28868, 0.5], [0.5, -0.28868, -0.5], [0.13398, -0.5, -0.5], [0.13398, -0.5, 0.5]]], [[[0.5, 0.28868, 0.5], [0.13398, 0.5, 0.5], [0.13398, 0.5, -0.5], [0.5, 0.28868, -0.5]]]] });
});
