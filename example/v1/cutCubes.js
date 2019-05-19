import { cube, union, writePdf, writeStl } from '@jsxcad/api-v1';

export const main = async () => {
  const unioned = union(cube(30).translate([0, 0, 0]),
                        cube(30).translate([5, 5, 0]),
                        cube(30).translate([-5, -5, 0]));
  const crossSectioned = unioned.crossSection();
  await writeStl({ path: 'tmp/cutCubes.unioned.stl' }, unioned);
  await writePdf({ path: 'tmp/cutCubes.crossSectioned.pdf' }, crossSectioned);
};
