import { Shape } from './Shape';
import { fromDst } from '@jsxcad/convert-dst';
import { readFile } from '@jsxcad/sys';

/**
 *
 * # Read Data Stitch Tajima
 *
 * ::: illustration { "view": { "position": [0, 0, 200] } }
 * ```
 * await readDst({ path: 'dst/atg-sft003.dst',
 *               sources: [{ file: 'dst/atg-sft003.dst' },
 *                         { url: 'https://jsxcad.js.org/dst/atg-sft003.dst' }] })
 * ```
 * :::
 * ::: illustration { "view": { "position": [0, 0, 20] } }
 * ```
 * await readDst({ path: 'dst/atg-sft003.dst',
 *                 sources: [{ file: 'dst/atg-sft003.dst' },
 *                           { url: 'https://jsxcad.js.org/dst/atg-sft003.dst' }] })
 * ```
 * :::
 *
 **/

export const readDst = async (options) => {
  const { path } = options;
  return Shape.fromGeometry(await fromDst(options, await readFile({ as: 'bytes', ...options }, path)));
};
