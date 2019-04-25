import { main } from './sphereCubes';
import { readFileSync } from 'fs';
import { test } from 'ava';

main();

test('Expected stl', t => {
  t.is(readFileSync('tmp/sphereCubes.stl', { encoding: 'utf8' }),
       readFileSync('sphereCubes.stl', { encoding: 'utf8' }));
});
