import { difference } from './difference';
import { toTransformedGeometry } from './toTransformedGeometry';

const toDisjointAssembly = (geometry) => {
  if (geometry.matrix !== undefined) {
    // Transforming is identity-producing, so disjoint before transforming.
    return toTransformedGeometry({ ...geometry, untransformed: toDisjointGeometry(geometry.untransformed) });
  } else if (geometry.disjoint !== undefined) {
    return geometry.disjoint;
  } else if (geometry.item !== undefined) {
    return { ...geometry, item: toDisjointAssembly(geometry.item) };
  } else if (geometry.assembly !== undefined) {
    const disjoint = [];
    for (let nth = geometry.assembly.length - 1; nth >= 0; nth--) {
      const item = toDisjointAssembly(geometry.assembly[nth]);
      disjoint.unshift(difference(item, ...disjoint));
    }
    const disjointAssembly = { disjointAssembly: disjoint };
    geometry.disjoint = disjointAssembly;
    return disjointAssembly;
  } else {
    return geometry;
  }
};

export const toDisjointGeometry = (inputGeometry) => toDisjointAssembly(inputGeometry);
