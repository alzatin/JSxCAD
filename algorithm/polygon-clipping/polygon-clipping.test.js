// import polygonClipping from './polygon-clipping.esm.js';
import test from 'ava';

test('fake', t => {
  t.is(1, 1);
});

/*
test("degenerate 1", t => {
  const a = [[[0.17283,18.40241],[0.22772,18.48456],[0.22772,18.48461],[0.17281,18.40243],[0.17283,18.40241]]];
  const b = [[[0.11978,18.32302],[0.14685,17.90202],[0.15809,18.11877],[0.11978,18.32302],[0.11978,18.32306],[0.11978,18.32302]]];
  polygonClipping.union(a, b);
});

test("degenerate 2", t => {
  const a = [[[0.2927,17.168],[0.2171,17.2813],[0.2171,17.2809],[0.2927,17.168],[0.2928,17.1679],[0.2927,17.168]]];
  const b = [[[0.3069,17.3253],[0.2929,17.3347],[0.3099,17.309],[0.3069,17.3253]]];
  polygonClipping.union(a, b);
});

test("fuzzy", t => {
  // polygonClipping.union(...[[[[-13.659807482533342,15.000000000000004],[-4.619397662556434,-1.9134171618254447],[-9.750026667063697,15.000000000000004],[-13.659807482533342,15.000000000000004]]],[[[-9.750026667063697,15.000000000000004],[-4.903926402016152,-0.9754516100806383],[-6.477371050357451,15.000000000000004],[-9.750026667063697,15.000000000000004]]]]);
  polygonClipping.union(...[[[[-13.65980,15.00000],[-4.61939,-1.91341],[-9.75002,15.00000],[-13.65980,15.00000]]],[[[-9.75002,15.00000],[-4.90392,-0.97545],[-6.47737,15.00000],[-9.75002,15.00000]]]]);
});

test("bad", t => {
  // const a = [[[11.547005383792516,0],[-5.7735026918962555,10.000000000000002],[-5.7735026918962635,-9.999999999999998],[11.547005383792516,0]]];
  const a = [[[11.547005,0],[-5.773502,10.000000],[-5.773502,-9.999999],[11.547005,0]]];
  const b = [[[25.39819391258478,10.741153591279646],[8.077685836896006,20.741153591279648],[8.077685836895999,0.7411535912796481],[25.39819391258478,10.741153591279646]]];
  const result = polygonClipping.union(a, b);
  t.deepEqual(result, []);
});
*/
