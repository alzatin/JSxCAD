import { toDisjointGeometry } from './toDisjointGeometry';

// Produce a disjoint geometry suitable for display.

export const toKeptGeometry = (geometry) => {
  const disjointGeometry = toDisjointGeometry(geometry);

  const walk = (geometry) => {
    if (geometry.tags === undefined || !geometry.tags.includes('@drop')) {
      if (geometry.assembly) {
        return { ...geometry, assembly: geometry.assembly.map(walk).filter(item => item !== undefined) };
      } else {
        return geometry;
      }
    }
  };

  const keptGeometry = walk(disjointGeometry);
  return keptGeometry || {};
};
