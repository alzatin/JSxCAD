import { makeConvex } from '@jsxcad/geometry-surface';
import { toPlane } from '@jsxcad/math-poly3';
import { toSegments } from '@jsxcad/geometry-path';
import { toTriangles } from '@jsxcad/geometry-polygons';

const pointsToThreejsPoints = (geometry) => {
  return geometry.points;
};

const pathsToThreejsSegments = (geometry) => {
  const segments = [];
  for (const path of geometry) {
    for (const [start, end] of toSegments({}, path)) {
      segments.push([start, end]);
    }
  }
  return segments;
};

const solidToThreejsSolid = (solid) => {
  const normals = [];
  const positions = [];
  for (const surface of solid) {
    // These should already be convex.
    for (const triangle of toTriangles({}, surface)) {
      for (const point of triangle) {
        const [x, y, z] = toPlane(triangle);
        normals.push(x, y, z);
        positions.push(...point);
      }
    }
  }
  return { normals, positions };
};

const surfaceToThreejsSurface = (surface) => {
  const normals = [];
  const positions = [];
  for (const triangle of toTriangles({}, makeConvex({}, surface))) {
    for (const point of triangle) {
      const [x, y, z, w] = toPlane(triangle);
      normals.push(x, y, z);
      if (isNaN(x)) {
        console.log(`QQ/triangle: ${triangle}`);
        console.log(`QQ/normal: ${x} ${y} ${z} ${w}`);
      }
      positions.push(...point);
    }
  }
  return { normals, positions };
};

export const toThreejsGeometry = (geometry, supertags) => {
  const tags = [...(supertags || []), ...(geometry.tags || [])];
  if (geometry.isThreejsGeometry) {
    return geometry;
  } else if (geometry.assembly) {
    return {
      assembly: geometry.assembly.map(item => toThreejsGeometry(item, tags)),
      tags,
      isThreejsGeometry: true
    };
  } else if (geometry.disjointAssembly) {
    const items = geometry.disjointAssembly;
    if (geometry.nonNegative) {
      items.push(...geometry.nonNegative);
    }
    return {
      assembly: items.map(item => toThreejsGeometry(item, tags)),
      tags,
      isThreejsGeometry: true
    };
  } else if (geometry.item) {
    return {
      item: toThreejsGeometry(geometry.item, tags),
      tags,
      isThreejsGeometry: true
    };
  } else if (geometry.paths) {
    return { threejsSegments: pathsToThreejsSegments(geometry.paths), tags, isThreejsGeometry: true };
  } else if (geometry.plan) {
    return { threejsPlan: geometry.plan, threejsMarks: geometry.marks, tags, isThreejsGeometry: true };
  } else if (geometry.points) {
    return { threejsSegments: pointsToThreejsPoints(geometry.points), tags, isThreejsGeometry: true };
  } else if (geometry.solid) {
    return { threejsSolid: solidToThreejsSolid(geometry.solid), tags, isThreejsGeometry: true };
  } else if (geometry.surface) {
    return { threejsSurface: surfaceToThreejsSurface(geometry.surface), tags, isThreejsGeometry: true };
  } else if (geometry.z0Surface) {
    return { threejsSurface: surfaceToThreejsSurface(geometry.z0Surface), tags, isThreejsGeometry: true };
  }
};
