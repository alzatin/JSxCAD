import { cube, union, writeStl, writeThreejsPage } from '@jsxcad/api-v1';

export const main = async () => {
  const result = union(
    cube({ corner1: [0, 0, 0], corner2: [40, 4, 1] }),
    cube({ corner1: [0, 1, 1], corner2: [40, 3, 2.5] }),

    cube({ corner1: [0, 10, 0], corner2: [40, 14, 1] }),
    cube({ corner1: [0, 10, 1], corner2: [40, 11, 2.5] }),
    cube({ corner1: [0, 13, 1], corner2: [40, 14, 2.5] }));

  await writeThreejsPage({ path: '/tmp/interlock-proof-of-concept.html', cameraPosition: [0, 100, 100] }, result);
  await writeStl({ path: 'tmp/interlock-proof-of-concept.stl' }, result);
};
