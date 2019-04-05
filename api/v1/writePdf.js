import { pathsToPdf } from '@jsxcad/algorithm-pdf';
import { writeFileSync } from '@jsxcad/sys';

export const writePdf = ({ path }, ...shapes) => {
  const surfaces = shapes.map(shape => {
    if (shape instanceof Array) {
      return shape;
    } else {
      return shape.toZ0Surface({});
    }
  });

  const drawings = shapes.map(shape => {
    if (shape instanceof Array) {
      return shape;
    } else {
      return shape.toZ0Drawing({});
    }
  });

  // FIX: How is this going to work with visualization?
  // Do we need to partition the geometries in the files by kind?
  writeFileSync(path, [].concat(surfaces, drawings),
                { translator: () => pathsToPdf({}, [].concat(...surfaces, ...drawings)) });
};
