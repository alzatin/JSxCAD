import { writeStl } from '@jsxcad/api-v1';
import { toPolygons } from '@jsxcad/algorithm-solid';

export const main = () => {
  let solid = [[[[-0.5, 1, 1.5], [-0.5, 1.5, 1.5], [-0.5, 1.5, -0.5], [-0.5, 1, -0.5]]], [[[-0.5, 1, 1.5], [-0.5, 1, 1], [-0.5, -0.5, 1], [-0.5, -0.5, 1.5]]], [[[1.5, -0.5, -0.5], [1.5, 1.5, -0.5], [1.5, 1.5, 1.5], [1.5, -0.5, 1.5]]], [[[1, -0.5, -0.5], [1.5, -0.5, -0.5], [1.5, -0.5, 1.5], [1, -0.5, 1.5]]], [[[1, -0.5, 1], [1, -0.5, 1.5], [-0.5, -0.5, 1.5], [-0.5, -0.5, 1]]], [[[1, 1.5, 1.5], [1.5, 1.5, 1.5], [1.5, 1.5, -0.5], [1, 1.5, -0.5]]], [[[-0.5, 1.5, 1.5], [1, 1.5, 1.5], [1, 1.5, -0.5], [-0.5, 1.5, -0.5]]], [[[1, 1.5, -0.5], [1.5, 1.5, -0.5], [1.5, -0.5, -0.5], [1, -0.5, -0.5]]], [[[1, 1.5, -0.5], [1, 1, -0.5], [-0.5, 1, -0.5], [-0.5, 1.5, -0.5]]], [[[1, -0.5, 1.5], [1.5, -0.5, 1.5], [1.5, 1.5, 1.5], [1, 1.5, 1.5]]], [[[1, 1, 1.5], [1, 1.5, 1.5], [-0.5, 1.5, 1.5], [-0.5, 1, 1.5]]], [[[1, 1, 1.5], [-0.5, 1, 1.5], [-0.5, -0.5, 1.5], [1, -0.5, 1.5]]], [[[1, 1, 1], [1, 1, -0.5], [1, -0.5, -0.5], [1, -0.5, 1]]], [[[-0.5, 1, 1], [-0.5, 1, -0.5], [1, 1, -0.5], [1, 1, 1]]], [[[1, 1, 1], [1, -0.5, 1], [-0.5, -0.5, 1], [-0.5, 1, 1]]]];
  writeStl({ path: 'tmp/solid.stl' }, toPolygons({}, solid));
};
