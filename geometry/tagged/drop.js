import { addTags } from './addTags';

// Dropped elements displace as usual, but are not included in positive output.

export const drop = (tags, geometry) => addTags(['compose/non-positive'], geometry, tags, 'has');
