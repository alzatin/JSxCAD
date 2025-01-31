import { add } from './add';
import test from 'ava';

test('vec2: add() called with two paramerters should return a vec2 with correct values', (t) => {
  const obs1 = add([0, 0], [0, 0]);
  t.deepEqual(obs1, [0, 0]);

  const obs2 = add([1, 2], [3, 2]);
  t.deepEqual(obs2, [4, 4]);

  const obs3 = add([1, 2], [-1, -2]);
  t.deepEqual(obs3, [0, 0]);

  const obs4 = add([-1, -2], [-1, -2]);
  t.deepEqual(obs4, [-2, -4]);
});
