import { addTags } from './addTags';
import test from 'ava';

test('Simple', t => {
  t.deepEqual(addTags(['x'], { solid: [] }), { solid: [], tags: ['x'] });
});
