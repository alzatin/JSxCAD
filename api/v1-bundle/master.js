import { installConsole, installConsoleCSS } from './console';
import { installDisplay, installDisplayCSS } from './display';
import { installEditor, installEditorCSS } from './editor';
import { installEvaluator, installEvaluatorCSS } from './evaluator';
import { installReference, installReferenceCSS } from './reference';
import { readFile, watchFile, watchFileCreation } from '@jsxcad/sys';

window.bootstrapCSS = () => {
  installConsoleCSS(document);
  installEditorCSS(document);
  installDisplayCSS(document);
  installEvaluatorCSS(document);
  installReferenceCSS(document);
};

window.bootstrap = async () => {
  const initialScript =
`
const main = async () => {
  const scene = assemble(sphere(10).as('sphere'),
                         cube(10).as('cube'),
                         cylinder({ r: 3, h: 30 }).as('cylinder'));
  await writeStl({ path: 'example.stl' }, scene);
  await writeStl({ path: 'sphere.stl' }, scene.toSolid({ requires: ['sphere'] }));
}
`;
  const { addPage, nextPage, lastPage } = await installDisplay({ document, readFile, watchFile, watchFileCreation, window });
  const { evaluator } = await installEvaluator({});
  await installEditor({ addPage, document, evaluator, initialScript, nextPage, lastPage });
  await installConsole({ addPage, document, watchFile });
  await installReference({ addPage, document });
};

window.onload = () => {
  window.bootstrapCSS();
  setTimeout(() => window.bootstrap(), 0);
};
