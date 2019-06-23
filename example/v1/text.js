const string = 'JSxCAD';
const greatVibes = await readFont({ path: 'ttf/GreatVibes.ttf', sources: ['./great-vibes/GreatVibes-Regular.ttf'] });
const letters = greatVibes({}, string);

await letters.writePdf('pdf/text.pdf');

await letters.extrude(10)
             .center()
             .writeStl('stl/text.stl');
