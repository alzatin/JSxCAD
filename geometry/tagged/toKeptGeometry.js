import { toDisjointGeometry } from './toDisjointGeometry';

const keptGeometry = Symbol('keptGeometry');

// Produce a disjoint geometry suitable for display.

export const toKeptGeometry = (geometry) => {
  if (geometry[keptGeometry] === undefined) {
    const disjointGeometry = toDisjointGeometry(geometry);
    const walk = (geometry) => {
      if (geometry[keptGeometry] !== undefined) {
        return geometry[keptGeometry];
      } else if (geometry.tags === undefined || !geometry.tags.includes('compose/non-positive')) {
        if (geometry.disjointAssembly) {
          const kept = geometry.disjointAssembly.map(walk).filter(item => item !== undefined);
          if (kept.length > 0) {
            const kept = { ...geometry, disjointAssembly: geometry.disjointAssembly.map(walk).filter(item => item !== undefined) };
            geometry[keptGeometry] = kept;
            return kept;
          } else {
            return undefined;
          }
        } else {
          return geometry;
        }
      }
    };
    const kept = walk(disjointGeometry);
    geometry[keptGeometry] = kept || { disjointAssembly: [] };
  }
  return geometry[keptGeometry];
};
