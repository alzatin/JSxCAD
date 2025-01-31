export const toSegments = (options = {}, path) => {
  const segments = [];
  if (path[0] !== null) {
    segments.push([path[path.length - 1], path[0]]);
    segments.push([path[0], path[1]]);
  }
  for (let nth = 2; nth < path.length; nth++) {
    segments.push([path[nth - 1], path[nth]]);
  }
  if (segments.some(segment => segment[1] === undefined)) {
    throw Error('die');
  }
  return segments;
};
