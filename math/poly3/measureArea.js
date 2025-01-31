import { cross, subtract } from '@jsxcad/math-vec3';

// measure the area of the given poly3 (3D planar polygon)
// translated from the orginal C++ code from Dan Sunday
// 2000 softSurfer http://geomalgorithms.com
export const measureArea = (poly3) => {
  let area = poly3.area;
  if (area !== undefined) {
    return area;
  }

  area = 0;
  const n = poly3.length;
  if (n < 3) {
    return 0; // degenerate polygon
  }
  const vertices = poly3;

  // calculate a real normal
  const a = vertices[0];
  const b = vertices[1];
  const c = vertices[2];
  const ba = subtract(b, a);
  const ca = subtract(c, a);
  const normal = cross(ba, ca);
  // let normal = b.minus(a).cross(c.minus(a))
  // let normal = poly3.plane.normal // unit based normal, CANNOT use

  // determin direction of projection
  const ax = Math.abs(normal[0]);
  const ay = Math.abs(normal[1]);
  const az = Math.abs(normal[2]);
  const an = Math.sqrt((ax * ax) + (ay * ay) + (az * az)); // length of normal

  let coord = 3; // ignore Z coordinates
  if ((ax > ay) && (ax > az)) {
    coord = 1; // ignore X coordinates
  } else
  if (ay > az) {
    coord = 2; // ignore Y coordinates
  }

  let h = 0;
  let i = 1;
  let j = 2;
  switch (coord) {
    case 1: // ignore X coordinates
    // compute area of 2D projection
      for (i = 1; i < n; i++) {
        h = i - 1;
        j = (i + 1) % n;
        area += (vertices[i][1] * (vertices[j][2] - vertices[h][2]));
      }
      area += (vertices[0][1] * (vertices[1][2] - vertices[n - 1][2]));
      // scale to get area
      area *= (an / (2 * normal[0]));
      break;

    case 2: // ignore Y coordinates
    // compute area of 2D projection
      for (i = 1; i < n; i++) {
        h = i - 1;
        j = (i + 1) % n;
        area += (vertices[i][2] * (vertices[j][0] - vertices[h][0]));
      }
      area += (vertices[0][2] * (vertices[1][0] - vertices[n - 1][0]));
      // scale to get area
      area *= (an / (2 * normal[1]));
      break;

    case 3: // ignore Z coordinates
    default:
    // compute area of 2D projection
      for (i = 1; i < n; i++) {
        h = i - 1;
        j = (i + 1) % n;
        area += (vertices[i][0] * (vertices[j][1] - vertices[h][1]));
      }
      area += (vertices[0][0] * (vertices[1][1] - vertices[n - 1][1]));
      // scale to get area
      area *= (an / (2 * normal[2]));
      break;
  }

  poly3.area = area;
  return area;
};
