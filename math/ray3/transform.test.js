import { canonicalize } from './canonicalize';
import { create } from './create';
import { fromPoints } from './fromPoints';
import test from 'ava';
import { transform } from './transform';

test('line3: transform() called with two paramerters should return a line3 with correct values', (t) => {
  const line1 = create();
  const line2 = fromPoints([1, 0, 0], [0, 1, 0]);
  const line3 = fromPoints([-3, -3, -3], [3, 3, 3]);

  const identityMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ];

  let obs1 = transform(identityMatrix, line1);
  t.deepEqual(canonicalize(obs1), [[0, 0, 0], [0, 0, 1]]);
  obs1 = transform(identityMatrix, line2);
  t.deepEqual(canonicalize(obs1), [[1, 0, 0], [-0.70711, 0.70711, 0]]);
  obs1 = transform(identityMatrix, line3);
  t.deepEqual(canonicalize(obs1), [[-3, -3, -3], [0.57735, 0.57735, 0.57735]]);

  const x = 1;
  const y = 5;
  const z = 7;
  const translationMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    x, y, z, 1
  ];

  let obs2 = transform(translationMatrix, line1);
  t.deepEqual(canonicalize(obs2), [[1, 5, 7], [0, 0, 1]]);
  obs2 = transform(translationMatrix, line2);
  t.deepEqual(canonicalize(obs2), [[2, 5, 7], [-0.70711, 0.70711, 0]]);
  obs2 = transform(translationMatrix, line3);
  t.deepEqual(canonicalize(obs2), [[-2, 2, 4], [0.57735, 0.57735, 0.57735]]);

  const w = 1;
  const h = 3;
  const d = 5;
  const scaleMatrix = [
    w, 0, 0, 0,
    0, h, 0, 0,
    0, 0, d, 0,
    0, 0, 0, 1
  ];

  let obs3 = transform(scaleMatrix, line1);
  t.deepEqual(canonicalize(obs3), [[0, 0, 0], [0, 0, 1]]);
  obs3 = transform(scaleMatrix, line2);
  t.deepEqual(canonicalize(obs3), [[1, 0, 0], [-0.31623, 0.94868, 0]]);
  obs3 = transform(scaleMatrix, line3);
  t.deepEqual(canonicalize(obs3), [[-3, -9, -15], [0.16903, 0.50709, 0.84515]]);

  const r = (90 * 0.017453292519943295);
  const rotateZMatrix = [
    Math.cos(r), Math.sin(r), 0, 0,
    -Math.sin(r), Math.cos(r), 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ];

  let obs4 = transform(rotateZMatrix, line1);
  t.deepEqual(canonicalize(obs4), [[0, 0, 0], [0, 0, 1]]);
  obs4 = transform(rotateZMatrix, line2);
  t.deepEqual(canonicalize(obs4), [[0, 1, 0], [-0.70711, -0.70711, 0]]);
  obs4 = transform(rotateZMatrix, line3);
  t.deepEqual(canonicalize(obs4), [[3, -3, -3], [-0.57735, 0.57735, 0.57735]]);
});
