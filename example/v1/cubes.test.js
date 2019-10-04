import { isExpected, run } from './run';

import test from 'ava';

test('Expected stl', async (t) => {
  await run('cubes');
  isExpected(t, 'cubes/file/stl/cubes.stl');
});
