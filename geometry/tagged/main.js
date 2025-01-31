import { fromScaling, fromTranslation, fromXRotation, fromYRotation, fromZRotation } from '@jsxcad/math-mat4';

import { addTags } from './addTags';
import { allTags } from './allTags';
import { assemble } from './assemble';
import { canonicalize } from './canonicalize';
import { difference } from './difference';
import { drop } from './drop';
import { eachItem } from './eachItem';
import { eachPoint } from './eachPoint';
import { flip } from './flip';
import { fromPathToSurface } from './fromPathToSurface';
import { fromPathToZ0Surface } from './fromPathToZ0Surface';
import { fromPathsToSurface } from './fromPathsToSurface';
import { fromPathsToZ0Surface } from './fromPathsToZ0Surface';
import { fromSurfaceToPaths } from './fromSurfaceToPaths';
import { getAnySurfaces } from './getAnySurfaces';
import { getItems } from './getItems';
import { getPaths } from './getPaths';
import { getPlans } from './getPlans';
import { getPoints } from './getPoints';
import { getSolids } from './getSolids';
import { getSurfaces } from './getSurfaces';
import { getTags } from './getTags';
import { getZ0Surfaces } from './getZ0Surfaces';
import { intersection } from './intersection';
import { keep } from './keep';
import { map } from './map';
import { measureBoundingBox } from './measureBoundingBox';
import { nonNegative } from './nonNegative';
import { outline } from './outline';
import { specify } from './specify';
import { toDisjointGeometry } from './toDisjointGeometry';
import { toKeptGeometry } from './toKeptGeometry';
import { toPoints } from './toPoints';
import { toStandardGeometry } from './toStandardGeometry';
import { toTransformedGeometry } from './toTransformedGeometry';
import { transform } from './transform';
import { union } from './union';

export {
  addTags,
  allTags,
  assemble,
  canonicalize,
  difference,
  drop,
  eachItem,
  eachPoint,
  flip,
  fromPathToSurface,
  fromPathToZ0Surface,
  fromPathsToSurface,
  fromPathsToZ0Surface,
  fromSurfaceToPaths,
  getAnySurfaces,
  getPoints,
  getItems,
  getPaths,
  getPlans,
  getSolids,
  getSurfaces,
  getTags,
  getZ0Surfaces,
  intersection,
  keep,
  map,
  measureBoundingBox,
  nonNegative,
  outline,
  specify,
  toDisjointGeometry,
  toKeptGeometry,
  toPoints,
  toStandardGeometry,
  toTransformedGeometry,
  transform,
  union
};

export const rotateX = (angle, assembly) => transform(fromXRotation(angle), assembly);
export const rotateY = (angle, assembly) => transform(fromYRotation(angle), assembly);
export const rotateZ = (angle, assembly) => transform(fromZRotation(angle), assembly);
export const translate = (vector, assembly) => transform(fromTranslation(vector), assembly);
export const scale = (vector, assembly) => transform(fromScaling(vector), assembly);
