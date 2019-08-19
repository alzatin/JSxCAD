import { alignVertices } from './alignVertices';
import { assertGood } from './assertGood';
import { makeConvex } from '@jsxcad/geometry-surface';

export const makeSurfacesConvex = (options = {}, rawSolid) => {
  // const solid = alignVertices(rawSolid);
  // assertGood(solid);
  const convex = rawSolid.map(surface => makeConvex(options, surface));
  // return alignVertices(convex);
  return convex;
};
