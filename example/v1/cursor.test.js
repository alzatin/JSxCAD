import { isExpected, run } from './run';

import test from 'ava';

test('Expected pdf', async (t) => {
  await run('cursor');
  isExpected(t, 'cursor/file/pdf/cursor.pdf');
});
