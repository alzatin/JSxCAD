export const map = (geometry, operation) => {
  const walk = (geometry) => {
    if (geometry.assembly) {
      return operation({ assembly: geometry.assembly.map(walk), tags: geometry.tags });
    } else if (geometry.disjointAssembly) {
      // FIX: Consider the case where the operation does not preserve disjoinedness.
      if (geometry.nonNegative) {
        return operation({ disjointAssembly: geometry.disjointAssembly.map(walk), nonNegative: geometry.nonNegative.map(walk), tags: geometry.tags });
      } else {
        return operation({ disjointAssembly: geometry.disjointAssembly.map(walk), tags: geometry.tags });
      }
    } else {
      // What about matrix?
      return operation(geometry);
    }
  };
  return walk(geometry);
};
