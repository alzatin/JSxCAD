import { isExpected, run } from './run';

import test from 'ava';

test('Expected pdf', async (t) => {
  await run('butterfly');
  isExpected(t, 'butterfly/file/pdf/butterfly.pdf');
});
