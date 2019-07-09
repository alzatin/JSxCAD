import { removeInteriorPolygons } from './removeInteriorPolygons';

// Remove all parts of surfaces from a that are in b.
export const removeInterior = (a, b, alsoRemoveCoplanarFront = false) => {
  if (b.plane === undefined) throw Error('die');
  if (a === null) {
    return null;
  } else {
    const clipped = {
      plane: a.plane,
      back: removeInterior(a.back, b, alsoRemoveCoplanarFront),
      front: removeInterior(a.front, b, alsoRemoveCoplanarFront),
      same: removeInteriorPolygons(b, a.same, alsoRemoveCoplanarFront)
    };
    return clipped;
  }
};
