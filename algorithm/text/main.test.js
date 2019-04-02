import { canonicalize } from '@jsxcad/algorithm-paths';
import { pathnameToFont, textToSurfaces } from './main';
import { test } from 'ava';

test('Render a letter', t => {
  const letterA = textToSurfaces({ font: pathnameToFont('./GreatVibes-Regular.ttf') }, 'a').map(canonicalize);
  t.deepEqual(letterA,
              [[[[30.31, 13.25, 0], [30.49998, 13.74125, 0], [30.54734, 14.12937, 0], [30.47822, 14.40594, 0], [30.31875, 14.5625, 0], [30.09506, 14.59062, 0], [29.83328, 14.48188, 0], [29.55955, 14.22781, 0], [29.3, 13.82, 0], [28.59158, 12.40719, 0], [27.63766, 10.60625, 0], [26.49646, 8.59719, 0], [25.22625, 6.56, 0], [23.88525, 4.67469, 0], [22.53172, 3.12125, 0], [21.22389, 2.07969, 0], [20.02, 1.73, 0], [19.69539, 1.79463, 0], [19.42938, 1.99016, 0], [19.22617, 2.31904, 0], [19.09, 2.78375, 0], [19.02508, 3.38674, 0], [19.03563, 4.13047, 0], [19.12586, 5.0174, 0], [19.3, 6.05, 0], [19.79254, 7.82684, 0], [20.52531, 9.79281, 0], [21.4273, 11.83988, 0], [22.4275, 13.86, 0], [23.45488, 15.74512, 0], [24.43844, 17.38719, 0], [25.30715, 18.67816, 0], [25.99, 19.51, 0], [25.6084, 19.4593, 0], [25.22281, 19.45687, 0], [24.83582, 19.49102, 0], [24.45, 19.55, 0], [24.06793, 19.62211, 0], [23.69219, 19.69562, 0], [23.32535, 19.75883, 0], [22.97, 19.8, 0], [22.16145, 19.76639, 0], [21.45344, 19.56484, 0], [20.82371, 19.20182, 0], [20.25, 18.68375, 0], [19.71004, 18.01709, 0], [19.18156, 17.20828, 0], [18.6423, 16.26377, 0], [18.07, 15.19, 0], [17.36104, 13.86766, 0], [16.63391, 12.55187, 0], [15.88451, 11.24828, 0], [15.10875, 9.9625, 0], [14.30252, 8.70016, 0], [13.46172, 7.46687, 0], [12.58225, 6.26828, 0], [11.66, 5.11, 0], [10.37559, 3.76471, 0], [9.09844, 2.76828, 0], [7.8902, 2.14615, 0], [6.8125, 1.92375, 0], [5.92699, 2.1265, 0], [5.29531, 2.77984, 0], [4.9791, 3.9092, 0], [5.04, 5.54, 0], [5.26684, 6.59807, 0], [5.60219, 7.69141, 0], [6.01207, 8.78123, 0], [6.4625, 9.82875, 0], [6.91949, 10.79518, 0], [7.34906, 11.64172, 0], [7.71723, 12.32959, 0], [7.99, 12.82, 0], [9.01236, 14.40566, 0], [10.12391, 15.96344, 0], [11.30506, 17.46449, 0], [12.53625, 18.88, 0], [13.79791, 20.18113, 0], [15.07047, 21.33906, 0], [16.33436, 22.32496, 0], [17.57, 23.11, 0], [18.56428, 23.55561, 0], [19.53734, 23.81172, 0], [20.46705, 23.87729, 0], [21.33125, 23.75125, 0], [22.10779, 23.43256, 0], [22.77453, 22.92016, 0], [23.30932, 22.21299, 0], [23.69, 21.31, 0], [24.11564, 21.29521, 0], [24.47016, 21.39609, 0], [24.7424, 21.59424, 0], [24.92125, 21.87125, 0], [24.99557, 22.20873, 0], [24.95422, 22.58828, 0], [24.78607, 22.9915, 0], [24.48, 23.4, 0], [22.76246, 24.74787, 0], [20.74844, 25.48297, 0], [18.53332, 25.66002, 0], [16.2125, 25.33375, 0], [13.88137, 24.55889, 0], [11.63531, 23.39016, 0], [9.56973, 21.88229, 0], [7.78, 20.09, 0], [4.44039, 15.26314, 0], [2.47562, 10.71203, 0], [1.7268, 6.67209, 0], [2.035, 3.37875, 0], [3.24133, 1.06744, 0], [5.18688, -0.02641, 0], [7.71273, 0.33264, 0], [10.66, 2.38, 0], [11.4326, 3.17086, 0], [12.18516, 4.02125, 0], [12.90982, 4.90914, 0], [13.59875, 5.8125, 0], [14.24408, 6.7093, 0], [14.83797, 7.5775, 0], [15.37256, 8.39508, 0], [15.84, 9.14, 0], [15.27691, 6.56455, 0], [15.15656, 4.47953, 0], [15.4023, 2.84193, 0], [15.9375, 1.60875, 0], [16.68551, 0.73697, 0], [17.56969, 0.18359, 0], [18.5134, -0.09439, 0], [19.44, -0.14, 0], [21.05879, 0.35865, 0], [22.65719, 1.48672, 0], [24.20824, 3.09736, 0], [25.685, 5.04375, 0], [27.06051, 7.17904, 0], [28.30781, 9.35641, 0], [29.39996, 11.429, 0]]]]);
});
