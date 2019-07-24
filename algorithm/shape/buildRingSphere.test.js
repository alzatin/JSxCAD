import { buildRingSphere } from './buildRingSphere';
import { canonicalize } from './canonicalize';
import test from 'ava';

test('Build a ring sphere', t => {
  const polygons = buildRingSphere({ resolution: 8 });
  t.deepEqual(canonicalize(polygons),
              [[[0.29389, -0.09549, 0.95106], [0.30902, 0, 0.95106], [0, 0, 1]], [[0.30902, 0, 0.95106], [0.29389, 0.09549, 0.95106], [0, 0, 1]], [[0.29389, 0.09549, 0.95106], [0.25, 0.18164, 0.95106], [0, 0, 1]], [[0.25, 0.18164, 0.95106], [0.18164, 0.25, 0.95106], [0, 0, 1]], [[0.18164, 0.25, 0.95106], [0.09549, 0.29389, 0.95106], [0, 0, 1]], [[0.09549, 0.29389, 0.95106], [0, 0.30902, 0.95106], [0, 0, 1]], [[0, 0.30902, 0.95106], [-0.09549, 0.29389, 0.95106], [0, 0, 1]], [[-0.09549, 0.29389, 0.95106], [-0.18164, 0.25, 0.95106], [0, 0, 1]], [[-0.18164, 0.25, 0.95106], [-0.25, 0.18164, 0.95106], [0, 0, 1]], [[-0.25, 0.18164, 0.95106], [-0.29389, 0.09549, 0.95106], [0, 0, 1]], [[-0.29389, 0.09549, 0.95106], [-0.30902, 0, 0.95106], [0, 0, 1]], [[-0.30902, 0, 0.95106], [-0.29389, -0.09549, 0.95106], [0, 0, 1]], [[-0.29389, -0.09549, 0.95106], [-0.25, -0.18164, 0.95106], [0, 0, 1]], [[-0.25, -0.18164, 0.95106], [-0.18164, -0.25, 0.95106], [0, 0, 1]], [[-0.18164, -0.25, 0.95106], [-0.09549, -0.29389, 0.95106], [0, 0, 1]], [[-0.09549, -0.29389, 0.95106], [-0, -0.30902, 0.95106], [0, 0, 1]], [[-0, -0.30902, 0.95106], [0.09549, -0.29389, 0.95106], [0, 0, 1]], [[0.09549, -0.29389, 0.95106], [0.18164, -0.25, 0.95106], [0, 0, 1]], [[0.18164, -0.25, 0.95106], [0.25, -0.18164, 0.95106], [0, 0, 1]], [[0.25, -0.18164, 0.95106], [0.29389, -0.09549, 0.95106], [0, 0, 1]], [[0.55902, -0.18164, 0.80902], [0.58779, 0, 0.80902], [0.30902, 0, 0.95106], [0.29389, -0.09549, 0.95106]], [[0.58779, 0, 0.80902], [0.55902, 0.18164, 0.80902], [0.29389, 0.09549, 0.95106], [0.30902, 0, 0.95106]], [[0.55902, 0.18164, 0.80902], [0.47553, 0.34549, 0.80902], [0.25, 0.18164, 0.95106], [0.29389, 0.09549, 0.95106]], [[0.47553, 0.34549, 0.80902], [0.34549, 0.47553, 0.80902], [0.18164, 0.25, 0.95106], [0.25, 0.18164, 0.95106]], [[0.34549, 0.47553, 0.80902], [0.18164, 0.55902, 0.80902], [0.09549, 0.29389, 0.95106], [0.18164, 0.25, 0.95106]], [[0.18164, 0.55902, 0.80902], [0, 0.58779, 0.80902], [0, 0.30902, 0.95106], [0.09549, 0.29389, 0.95106]], [[0, 0.58779, 0.80902], [-0.18164, 0.55902, 0.80902], [-0.09549, 0.29389, 0.95106], [0, 0.30902, 0.95106]], [[-0.18164, 0.55902, 0.80902], [-0.34549, 0.47553, 0.80902], [-0.18164, 0.25, 0.95106], [-0.09549, 0.29389, 0.95106]], [[-0.34549, 0.47553, 0.80902], [-0.47553, 0.34549, 0.80902], [-0.25, 0.18164, 0.95106], [-0.18164, 0.25, 0.95106]], [[-0.47553, 0.34549, 0.80902], [-0.55902, 0.18164, 0.80902], [-0.29389, 0.09549, 0.95106], [-0.25, 0.18164, 0.95106]], [[-0.55902, 0.18164, 0.80902], [-0.58779, 0, 0.80902], [-0.30902, 0, 0.95106], [-0.29389, 0.09549, 0.95106]], [[-0.58779, 0, 0.80902], [-0.55902, -0.18164, 0.80902], [-0.29389, -0.09549, 0.95106], [-0.30902, 0, 0.95106]], [[-0.55902, -0.18164, 0.80902], [-0.47553, -0.34549, 0.80902], [-0.25, -0.18164, 0.95106], [-0.29389, -0.09549, 0.95106]], [[-0.47553, -0.34549, 0.80902], [-0.34549, -0.47553, 0.80902], [-0.18164, -0.25, 0.95106], [-0.25, -0.18164, 0.95106]], [[-0.34549, -0.47553, 0.80902], [-0.18164, -0.55902, 0.80902], [-0.09549, -0.29389, 0.95106], [-0.18164, -0.25, 0.95106]], [[-0.18164, -0.55902, 0.80902], [-0, -0.58779, 0.80902], [-0, -0.30902, 0.95106], [-0.09549, -0.29389, 0.95106]], [[-0, -0.58779, 0.80902], [0.18164, -0.55902, 0.80902], [0.09549, -0.29389, 0.95106], [-0, -0.30902, 0.95106]], [[0.18164, -0.55902, 0.80902], [0.34549, -0.47553, 0.80902], [0.18164, -0.25, 0.95106], [0.09549, -0.29389, 0.95106]], [[0.34549, -0.47553, 0.80902], [0.47553, -0.34549, 0.80902], [0.25, -0.18164, 0.95106], [0.18164, -0.25, 0.95106]], [[0.47553, -0.34549, 0.80902], [0.55902, -0.18164, 0.80902], [0.29389, -0.09549, 0.95106], [0.25, -0.18164, 0.95106]], [[0.76942, -0.25, 0.58779], [0.80902, 0, 0.58779], [0.58779, 0, 0.80902], [0.55902, -0.18164, 0.80902]], [[0.80902, 0, 0.58779], [0.76942, 0.25, 0.58779], [0.55902, 0.18164, 0.80902], [0.58779, 0, 0.80902]], [[0.76942, 0.25, 0.58779], [0.65451, 0.47553, 0.58779], [0.47553, 0.34549, 0.80902], [0.55902, 0.18164, 0.80902]], [[0.65451, 0.47553, 0.58779], [0.47553, 0.65451, 0.58779], [0.34549, 0.47553, 0.80902], [0.47553, 0.34549, 0.80902]], [[0.47553, 0.65451, 0.58779], [0.25, 0.76942, 0.58779], [0.18164, 0.55902, 0.80902], [0.34549, 0.47553, 0.80902]], [[0.25, 0.76942, 0.58779], [0, 0.80902, 0.58779], [0, 0.58779, 0.80902], [0.18164, 0.55902, 0.80902]], [[0, 0.80902, 0.58779], [-0.25, 0.76942, 0.58779], [-0.18164, 0.55902, 0.80902], [0, 0.58779, 0.80902]], [[-0.25, 0.76942, 0.58779], [-0.47553, 0.65451, 0.58779], [-0.34549, 0.47553, 0.80902], [-0.18164, 0.55902, 0.80902]], [[-0.47553, 0.65451, 0.58779], [-0.65451, 0.47553, 0.58779], [-0.47553, 0.34549, 0.80902], [-0.34549, 0.47553, 0.80902]], [[-0.65451, 0.47553, 0.58779], [-0.76942, 0.25, 0.58779], [-0.55902, 0.18164, 0.80902], [-0.47553, 0.34549, 0.80902]], [[-0.76942, 0.25, 0.58779], [-0.80902, 0, 0.58779], [-0.58779, 0, 0.80902], [-0.55902, 0.18164, 0.80902]], [[-0.80902, 0, 0.58779], [-0.76942, -0.25, 0.58779], [-0.55902, -0.18164, 0.80902], [-0.58779, 0, 0.80902]], [[-0.76942, -0.25, 0.58779], [-0.65451, -0.47553, 0.58779], [-0.47553, -0.34549, 0.80902], [-0.55902, -0.18164, 0.80902]], [[-0.65451, -0.47553, 0.58779], [-0.47553, -0.65451, 0.58779], [-0.34549, -0.47553, 0.80902], [-0.47553, -0.34549, 0.80902]], [[-0.47553, -0.65451, 0.58779], [-0.25, -0.76942, 0.58779], [-0.18164, -0.55902, 0.80902], [-0.34549, -0.47553, 0.80902]], [[-0.25, -0.76942, 0.58779], [-0, -0.80902, 0.58779], [-0, -0.58779, 0.80902], [-0.18164, -0.55902, 0.80902]], [[-0, -0.80902, 0.58779], [0.25, -0.76942, 0.58779], [0.18164, -0.55902, 0.80902], [-0, -0.58779, 0.80902]], [[0.25, -0.76942, 0.58779], [0.47553, -0.65451, 0.58779], [0.34549, -0.47553, 0.80902], [0.18164, -0.55902, 0.80902]], [[0.47553, -0.65451, 0.58779], [0.65451, -0.47553, 0.58779], [0.47553, -0.34549, 0.80902], [0.34549, -0.47553, 0.80902]], [[0.65451, -0.47553, 0.58779], [0.76942, -0.25, 0.58779], [0.55902, -0.18164, 0.80902], [0.47553, -0.34549, 0.80902]], [[0.90451, -0.29389, 0.30902], [0.95106, 0, 0.30902], [0.80902, 0, 0.58779], [0.76942, -0.25, 0.58779]], [[0.95106, 0, 0.30902], [0.90451, 0.29389, 0.30902], [0.76942, 0.25, 0.58779], [0.80902, 0, 0.58779]], [[0.90451, 0.29389, 0.30902], [0.76942, 0.55902, 0.30902], [0.65451, 0.47553, 0.58779], [0.76942, 0.25, 0.58779]], [[0.76942, 0.55902, 0.30902], [0.55902, 0.76942, 0.30902], [0.47553, 0.65451, 0.58779], [0.65451, 0.47553, 0.58779]], [[0.55902, 0.76942, 0.30902], [0.29389, 0.90451, 0.30902], [0.25, 0.76942, 0.58779], [0.47553, 0.65451, 0.58779]], [[0.29389, 0.90451, 0.30902], [0, 0.95106, 0.30902], [0, 0.80902, 0.58779], [0.25, 0.76942, 0.58779]], [[0, 0.95106, 0.30902], [-0.29389, 0.90451, 0.30902], [-0.25, 0.76942, 0.58779], [0, 0.80902, 0.58779]], [[-0.29389, 0.90451, 0.30902], [-0.55902, 0.76942, 0.30902], [-0.47553, 0.65451, 0.58779], [-0.25, 0.76942, 0.58779]], [[-0.55902, 0.76942, 0.30902], [-0.76942, 0.55902, 0.30902], [-0.65451, 0.47553, 0.58779], [-0.47553, 0.65451, 0.58779]], [[-0.76942, 0.55902, 0.30902], [-0.90451, 0.29389, 0.30902], [-0.76942, 0.25, 0.58779], [-0.65451, 0.47553, 0.58779]], [[-0.90451, 0.29389, 0.30902], [-0.95106, 0, 0.30902], [-0.80902, 0, 0.58779], [-0.76942, 0.25, 0.58779]], [[-0.95106, 0, 0.30902], [-0.90451, -0.29389, 0.30902], [-0.76942, -0.25, 0.58779], [-0.80902, 0, 0.58779]], [[-0.90451, -0.29389, 0.30902], [-0.76942, -0.55902, 0.30902], [-0.65451, -0.47553, 0.58779], [-0.76942, -0.25, 0.58779]], [[-0.76942, -0.55902, 0.30902], [-0.55902, -0.76942, 0.30902], [-0.47553, -0.65451, 0.58779], [-0.65451, -0.47553, 0.58779]], [[-0.55902, -0.76942, 0.30902], [-0.29389, -0.90451, 0.30902], [-0.25, -0.76942, 0.58779], [-0.47553, -0.65451, 0.58779]], [[-0.29389, -0.90451, 0.30902], [-0, -0.95106, 0.30902], [-0, -0.80902, 0.58779], [-0.25, -0.76942, 0.58779]], [[-0, -0.95106, 0.30902], [0.29389, -0.90451, 0.30902], [0.25, -0.76942, 0.58779], [-0, -0.80902, 0.58779]], [[0.29389, -0.90451, 0.30902], [0.55902, -0.76942, 0.30902], [0.47553, -0.65451, 0.58779], [0.25, -0.76942, 0.58779]], [[0.55902, -0.76942, 0.30902], [0.76942, -0.55902, 0.30902], [0.65451, -0.47553, 0.58779], [0.47553, -0.65451, 0.58779]], [[0.76942, -0.55902, 0.30902], [0.90451, -0.29389, 0.30902], [0.76942, -0.25, 0.58779], [0.65451, -0.47553, 0.58779]], [[0.95106, -0.30902, 0], [1, 0, 0], [0.95106, 0, 0.30902], [0.90451, -0.29389, 0.30902]], [[1, 0, 0], [0.95106, 0.30902, 0], [0.90451, 0.29389, 0.30902], [0.95106, 0, 0.30902]], [[0.95106, 0.30902, 0], [0.80902, 0.58779, 0], [0.76942, 0.55902, 0.30902], [0.90451, 0.29389, 0.30902]], [[0.80902, 0.58779, 0], [0.58779, 0.80902, 0], [0.55902, 0.76942, 0.30902], [0.76942, 0.55902, 0.30902]], [[0.58779, 0.80902, 0], [0.30902, 0.95106, 0], [0.29389, 0.90451, 0.30902], [0.55902, 0.76942, 0.30902]], [[0.30902, 0.95106, 0], [0, 1, 0], [0, 0.95106, 0.30902], [0.29389, 0.90451, 0.30902]], [[0, 1, 0], [-0.30902, 0.95106, 0], [-0.29389, 0.90451, 0.30902], [0, 0.95106, 0.30902]], [[-0.30902, 0.95106, 0], [-0.58779, 0.80902, 0], [-0.55902, 0.76942, 0.30902], [-0.29389, 0.90451, 0.30902]], [[-0.58779, 0.80902, 0], [-0.80902, 0.58779, 0], [-0.76942, 0.55902, 0.30902], [-0.55902, 0.76942, 0.30902]], [[-0.80902, 0.58779, 0], [-0.95106, 0.30902, 0], [-0.90451, 0.29389, 0.30902], [-0.76942, 0.55902, 0.30902]], [[-0.95106, 0.30902, 0], [-1, 0, 0], [-0.95106, 0, 0.30902], [-0.90451, 0.29389, 0.30902]], [[-1, 0, 0], [-0.95106, -0.30902, 0], [-0.90451, -0.29389, 0.30902], [-0.95106, 0, 0.30902]], [[-0.95106, -0.30902, 0], [-0.80902, -0.58779, 0], [-0.76942, -0.55902, 0.30902], [-0.90451, -0.29389, 0.30902]], [[-0.80902, -0.58779, 0], [-0.58779, -0.80902, 0], [-0.55902, -0.76942, 0.30902], [-0.76942, -0.55902, 0.30902]], [[-0.58779, -0.80902, 0], [-0.30902, -0.95106, 0], [-0.29389, -0.90451, 0.30902], [-0.55902, -0.76942, 0.30902]], [[-0.30902, -0.95106, 0], [-0, -1, 0], [-0, -0.95106, 0.30902], [-0.29389, -0.90451, 0.30902]], [[-0, -1, 0], [0.30902, -0.95106, 0], [0.29389, -0.90451, 0.30902], [-0, -0.95106, 0.30902]], [[0.30902, -0.95106, 0], [0.58779, -0.80902, 0], [0.55902, -0.76942, 0.30902], [0.29389, -0.90451, 0.30902]], [[0.58779, -0.80902, 0], [0.80902, -0.58779, 0], [0.76942, -0.55902, 0.30902], [0.55902, -0.76942, 0.30902]], [[0.80902, -0.58779, 0], [0.95106, -0.30902, 0], [0.90451, -0.29389, 0.30902], [0.76942, -0.55902, 0.30902]], [[0.90451, -0.29389, -0.30902], [0.95106, 0, -0.30902], [1, 0, 0], [0.95106, -0.30902, 0]], [[0.95106, 0, -0.30902], [0.90451, 0.29389, -0.30902], [0.95106, 0.30902, 0], [1, 0, 0]], [[0.90451, 0.29389, -0.30902], [0.76942, 0.55902, -0.30902], [0.80902, 0.58779, 0], [0.95106, 0.30902, 0]], [[0.76942, 0.55902, -0.30902], [0.55902, 0.76942, -0.30902], [0.58779, 0.80902, 0], [0.80902, 0.58779, 0]], [[0.55902, 0.76942, -0.30902], [0.29389, 0.90451, -0.30902], [0.30902, 0.95106, 0], [0.58779, 0.80902, 0]], [[0.29389, 0.90451, -0.30902], [0, 0.95106, -0.30902], [0, 1, 0], [0.30902, 0.95106, 0]], [[0, 0.95106, -0.30902], [-0.29389, 0.90451, -0.30902], [-0.30902, 0.95106, 0], [0, 1, 0]], [[-0.29389, 0.90451, -0.30902], [-0.55902, 0.76942, -0.30902], [-0.58779, 0.80902, 0], [-0.30902, 0.95106, 0]], [[-0.55902, 0.76942, -0.30902], [-0.76942, 0.55902, -0.30902], [-0.80902, 0.58779, 0], [-0.58779, 0.80902, 0]], [[-0.76942, 0.55902, -0.30902], [-0.90451, 0.29389, -0.30902], [-0.95106, 0.30902, 0], [-0.80902, 0.58779, 0]], [[-0.90451, 0.29389, -0.30902], [-0.95106, 0, -0.30902], [-1, 0, 0], [-0.95106, 0.30902, 0]], [[-0.95106, 0, -0.30902], [-0.90451, -0.29389, -0.30902], [-0.95106, -0.30902, 0], [-1, 0, 0]], [[-0.90451, -0.29389, -0.30902], [-0.76942, -0.55902, -0.30902], [-0.80902, -0.58779, 0], [-0.95106, -0.30902, 0]], [[-0.76942, -0.55902, -0.30902], [-0.55902, -0.76942, -0.30902], [-0.58779, -0.80902, 0], [-0.80902, -0.58779, 0]], [[-0.55902, -0.76942, -0.30902], [-0.29389, -0.90451, -0.30902], [-0.30902, -0.95106, 0], [-0.58779, -0.80902, 0]], [[-0.29389, -0.90451, -0.30902], [-0, -0.95106, -0.30902], [-0, -1, 0], [-0.30902, -0.95106, 0]], [[-0, -0.95106, -0.30902], [0.29389, -0.90451, -0.30902], [0.30902, -0.95106, 0], [-0, -1, 0]], [[0.29389, -0.90451, -0.30902], [0.55902, -0.76942, -0.30902], [0.58779, -0.80902, 0], [0.30902, -0.95106, 0]], [[0.55902, -0.76942, -0.30902], [0.76942, -0.55902, -0.30902], [0.80902, -0.58779, 0], [0.58779, -0.80902, 0]], [[0.76942, -0.55902, -0.30902], [0.90451, -0.29389, -0.30902], [0.95106, -0.30902, 0], [0.80902, -0.58779, 0]], [[0.76942, -0.25, -0.58779], [0.80902, 0, -0.58779], [0.95106, 0, -0.30902], [0.90451, -0.29389, -0.30902]], [[0.80902, 0, -0.58779], [0.76942, 0.25, -0.58779], [0.90451, 0.29389, -0.30902], [0.95106, 0, -0.30902]], [[0.76942, 0.25, -0.58779], [0.65451, 0.47553, -0.58779], [0.76942, 0.55902, -0.30902], [0.90451, 0.29389, -0.30902]], [[0.65451, 0.47553, -0.58779], [0.47553, 0.65451, -0.58779], [0.55902, 0.76942, -0.30902], [0.76942, 0.55902, -0.30902]], [[0.47553, 0.65451, -0.58779], [0.25, 0.76942, -0.58779], [0.29389, 0.90451, -0.30902], [0.55902, 0.76942, -0.30902]], [[0.25, 0.76942, -0.58779], [0, 0.80902, -0.58779], [0, 0.95106, -0.30902], [0.29389, 0.90451, -0.30902]], [[0, 0.80902, -0.58779], [-0.25, 0.76942, -0.58779], [-0.29389, 0.90451, -0.30902], [0, 0.95106, -0.30902]], [[-0.25, 0.76942, -0.58779], [-0.47553, 0.65451, -0.58779], [-0.55902, 0.76942, -0.30902], [-0.29389, 0.90451, -0.30902]], [[-0.47553, 0.65451, -0.58779], [-0.65451, 0.47553, -0.58779], [-0.76942, 0.55902, -0.30902], [-0.55902, 0.76942, -0.30902]], [[-0.65451, 0.47553, -0.58779], [-0.76942, 0.25, -0.58779], [-0.90451, 0.29389, -0.30902], [-0.76942, 0.55902, -0.30902]], [[-0.76942, 0.25, -0.58779], [-0.80902, 0, -0.58779], [-0.95106, 0, -0.30902], [-0.90451, 0.29389, -0.30902]], [[-0.80902, 0, -0.58779], [-0.76942, -0.25, -0.58779], [-0.90451, -0.29389, -0.30902], [-0.95106, 0, -0.30902]], [[-0.76942, -0.25, -0.58779], [-0.65451, -0.47553, -0.58779], [-0.76942, -0.55902, -0.30902], [-0.90451, -0.29389, -0.30902]], [[-0.65451, -0.47553, -0.58779], [-0.47553, -0.65451, -0.58779], [-0.55902, -0.76942, -0.30902], [-0.76942, -0.55902, -0.30902]], [[-0.47553, -0.65451, -0.58779], [-0.25, -0.76942, -0.58779], [-0.29389, -0.90451, -0.30902], [-0.55902, -0.76942, -0.30902]], [[-0.25, -0.76942, -0.58779], [-0, -0.80902, -0.58779], [-0, -0.95106, -0.30902], [-0.29389, -0.90451, -0.30902]], [[-0, -0.80902, -0.58779], [0.25, -0.76942, -0.58779], [0.29389, -0.90451, -0.30902], [-0, -0.95106, -0.30902]], [[0.25, -0.76942, -0.58779], [0.47553, -0.65451, -0.58779], [0.55902, -0.76942, -0.30902], [0.29389, -0.90451, -0.30902]], [[0.47553, -0.65451, -0.58779], [0.65451, -0.47553, -0.58779], [0.76942, -0.55902, -0.30902], [0.55902, -0.76942, -0.30902]], [[0.65451, -0.47553, -0.58779], [0.76942, -0.25, -0.58779], [0.90451, -0.29389, -0.30902], [0.76942, -0.55902, -0.30902]], [[0.55902, -0.18164, -0.80902], [0.58779, 0, -0.80902], [0.80902, 0, -0.58779], [0.76942, -0.25, -0.58779]], [[0.58779, 0, -0.80902], [0.55902, 0.18164, -0.80902], [0.76942, 0.25, -0.58779], [0.80902, 0, -0.58779]], [[0.55902, 0.18164, -0.80902], [0.47553, 0.34549, -0.80902], [0.65451, 0.47553, -0.58779], [0.76942, 0.25, -0.58779]], [[0.47553, 0.34549, -0.80902], [0.34549, 0.47553, -0.80902], [0.47553, 0.65451, -0.58779], [0.65451, 0.47553, -0.58779]], [[0.34549, 0.47553, -0.80902], [0.18164, 0.55902, -0.80902], [0.25, 0.76942, -0.58779], [0.47553, 0.65451, -0.58779]], [[0.18164, 0.55902, -0.80902], [0, 0.58779, -0.80902], [0, 0.80902, -0.58779], [0.25, 0.76942, -0.58779]], [[0, 0.58779, -0.80902], [-0.18164, 0.55902, -0.80902], [-0.25, 0.76942, -0.58779], [0, 0.80902, -0.58779]], [[-0.18164, 0.55902, -0.80902], [-0.34549, 0.47553, -0.80902], [-0.47553, 0.65451, -0.58779], [-0.25, 0.76942, -0.58779]], [[-0.34549, 0.47553, -0.80902], [-0.47553, 0.34549, -0.80902], [-0.65451, 0.47553, -0.58779], [-0.47553, 0.65451, -0.58779]], [[-0.47553, 0.34549, -0.80902], [-0.55902, 0.18164, -0.80902], [-0.76942, 0.25, -0.58779], [-0.65451, 0.47553, -0.58779]], [[-0.55902, 0.18164, -0.80902], [-0.58779, 0, -0.80902], [-0.80902, 0, -0.58779], [-0.76942, 0.25, -0.58779]], [[-0.58779, 0, -0.80902], [-0.55902, -0.18164, -0.80902], [-0.76942, -0.25, -0.58779], [-0.80902, 0, -0.58779]], [[-0.55902, -0.18164, -0.80902], [-0.47553, -0.34549, -0.80902], [-0.65451, -0.47553, -0.58779], [-0.76942, -0.25, -0.58779]], [[-0.47553, -0.34549, -0.80902], [-0.34549, -0.47553, -0.80902], [-0.47553, -0.65451, -0.58779], [-0.65451, -0.47553, -0.58779]], [[-0.34549, -0.47553, -0.80902], [-0.18164, -0.55902, -0.80902], [-0.25, -0.76942, -0.58779], [-0.47553, -0.65451, -0.58779]], [[-0.18164, -0.55902, -0.80902], [-0, -0.58779, -0.80902], [-0, -0.80902, -0.58779], [-0.25, -0.76942, -0.58779]], [[-0, -0.58779, -0.80902], [0.18164, -0.55902, -0.80902], [0.25, -0.76942, -0.58779], [-0, -0.80902, -0.58779]], [[0.18164, -0.55902, -0.80902], [0.34549, -0.47553, -0.80902], [0.47553, -0.65451, -0.58779], [0.25, -0.76942, -0.58779]], [[0.34549, -0.47553, -0.80902], [0.47553, -0.34549, -0.80902], [0.65451, -0.47553, -0.58779], [0.47553, -0.65451, -0.58779]], [[0.47553, -0.34549, -0.80902], [0.55902, -0.18164, -0.80902], [0.76942, -0.25, -0.58779], [0.65451, -0.47553, -0.58779]], [[0.29389, -0.09549, -0.95106], [0.30902, 0, -0.95106], [0.58779, 0, -0.80902], [0.55902, -0.18164, -0.80902]], [[0.30902, 0, -0.95106], [0.29389, 0.09549, -0.95106], [0.55902, 0.18164, -0.80902], [0.58779, 0, -0.80902]], [[0.29389, 0.09549, -0.95106], [0.25, 0.18164, -0.95106], [0.47553, 0.34549, -0.80902], [0.55902, 0.18164, -0.80902]], [[0.25, 0.18164, -0.95106], [0.18164, 0.25, -0.95106], [0.34549, 0.47553, -0.80902], [0.47553, 0.34549, -0.80902]], [[0.18164, 0.25, -0.95106], [0.09549, 0.29389, -0.95106], [0.18164, 0.55902, -0.80902], [0.34549, 0.47553, -0.80902]], [[0.09549, 0.29389, -0.95106], [0, 0.30902, -0.95106], [0, 0.58779, -0.80902], [0.18164, 0.55902, -0.80902]], [[0, 0.30902, -0.95106], [-0.09549, 0.29389, -0.95106], [-0.18164, 0.55902, -0.80902], [0, 0.58779, -0.80902]], [[-0.09549, 0.29389, -0.95106], [-0.18164, 0.25, -0.95106], [-0.34549, 0.47553, -0.80902], [-0.18164, 0.55902, -0.80902]], [[-0.18164, 0.25, -0.95106], [-0.25, 0.18164, -0.95106], [-0.47553, 0.34549, -0.80902], [-0.34549, 0.47553, -0.80902]], [[-0.25, 0.18164, -0.95106], [-0.29389, 0.09549, -0.95106], [-0.55902, 0.18164, -0.80902], [-0.47553, 0.34549, -0.80902]], [[-0.29389, 0.09549, -0.95106], [-0.30902, 0, -0.95106], [-0.58779, 0, -0.80902], [-0.55902, 0.18164, -0.80902]], [[-0.30902, 0, -0.95106], [-0.29389, -0.09549, -0.95106], [-0.55902, -0.18164, -0.80902], [-0.58779, 0, -0.80902]], [[-0.29389, -0.09549, -0.95106], [-0.25, -0.18164, -0.95106], [-0.47553, -0.34549, -0.80902], [-0.55902, -0.18164, -0.80902]], [[-0.25, -0.18164, -0.95106], [-0.18164, -0.25, -0.95106], [-0.34549, -0.47553, -0.80902], [-0.47553, -0.34549, -0.80902]], [[-0.18164, -0.25, -0.95106], [-0.09549, -0.29389, -0.95106], [-0.18164, -0.55902, -0.80902], [-0.34549, -0.47553, -0.80902]], [[-0.09549, -0.29389, -0.95106], [-0, -0.30902, -0.95106], [-0, -0.58779, -0.80902], [-0.18164, -0.55902, -0.80902]], [[-0, -0.30902, -0.95106], [0.09549, -0.29389, -0.95106], [0.18164, -0.55902, -0.80902], [-0, -0.58779, -0.80902]], [[0.09549, -0.29389, -0.95106], [0.18164, -0.25, -0.95106], [0.34549, -0.47553, -0.80902], [0.18164, -0.55902, -0.80902]], [[0.18164, -0.25, -0.95106], [0.25, -0.18164, -0.95106], [0.47553, -0.34549, -0.80902], [0.34549, -0.47553, -0.80902]], [[0.25, -0.18164, -0.95106], [0.29389, -0.09549, -0.95106], [0.55902, -0.18164, -0.80902], [0.47553, -0.34549, -0.80902]], [[0, -0, -1], [0, 0, -1], [0.30902, 0, -0.95106], [0.29389, -0.09549, -0.95106]], [[0, 0, -1], [0, 0, -1], [0.29389, 0.09549, -0.95106], [0.30902, 0, -0.95106]], [[0, 0, -1], [0, 0, -1], [0.25, 0.18164, -0.95106], [0.29389, 0.09549, -0.95106]], [[0, 0, -1], [0, 0, -1], [0.18164, 0.25, -0.95106], [0.25, 0.18164, -0.95106]], [[0, 0, -1], [0, 0, -1], [0.09549, 0.29389, -0.95106], [0.18164, 0.25, -0.95106]], [[0, 0, -1], [0, 0, -1], [0, 0.30902, -0.95106], [0.09549, 0.29389, -0.95106]], [[0, 0, -1], [-0, 0, -1], [-0.09549, 0.29389, -0.95106], [0, 0.30902, -0.95106]], [[-0, 0, -1], [-0, 0, -1], [-0.18164, 0.25, -0.95106], [-0.09549, 0.29389, -0.95106]], [[-0, 0, -1], [-0, 0, -1], [-0.25, 0.18164, -0.95106], [-0.18164, 0.25, -0.95106]], [[-0, 0, -1], [-0, 0, -1], [-0.29389, 0.09549, -0.95106], [-0.25, 0.18164, -0.95106]], [[-0, 0, -1], [-0, 0, -1], [-0.30902, 0, -0.95106], [-0.29389, 0.09549, -0.95106]], [[-0, 0, -1], [-0, -0, -1], [-0.29389, -0.09549, -0.95106], [-0.30902, 0, -0.95106]], [[-0, -0, -1], [-0, -0, -1], [-0.25, -0.18164, -0.95106], [-0.29389, -0.09549, -0.95106]], [[-0, -0, -1], [-0, -0, -1], [-0.18164, -0.25, -0.95106], [-0.25, -0.18164, -0.95106]], [[-0, -0, -1], [-0, -0, -1], [-0.09549, -0.29389, -0.95106], [-0.18164, -0.25, -0.95106]], [[-0, -0, -1], [-0, -0, -1], [-0, -0.30902, -0.95106], [-0.09549, -0.29389, -0.95106]], [[-0, -0, -1], [0, -0, -1], [0.09549, -0.29389, -0.95106], [-0, -0.30902, -0.95106]], [[0, -0, -1], [0, -0, -1], [0.18164, -0.25, -0.95106], [0.09549, -0.29389, -0.95106]], [[0, -0, -1], [0, -0, -1], [0.25, -0.18164, -0.95106], [0.18164, -0.25, -0.95106]], [[0, -0, -1], [0, -0, -1], [0.29389, -0.09549, -0.95106], [0.25, -0.18164, -0.95106]]]);
});
