

const paths = await readDst({ path: 'atg-sft003.dst', sources: ['atg-sft003.dst'] });
await paths.writePdf('pdf/atg-sft003.pdf');
