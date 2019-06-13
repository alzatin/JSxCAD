import { parse } from '@babel/parser';
import recast from 'recast';

export const toEcmascript = (options, script) => {
  let ast = recast.parse(script,
                         {
                           parser: {
                             parse: (script) => parse(script,
                                                      {
                                                        allowAwaitOutsideFunction: true,
                                                        allowReturnOutsideFunction: true,
                                                        sourceType: 'module'
                                                      })
                           }
                         });

  const exportNames = [];
  const expressions = [];

  const body = ast.program.body;
  const out = [];

  // Separate top level exports and expressions.
  // FIX: This will reorder things unnecessarily when export main is present.
  for (let nth = 0; nth < body.length; nth++) {
    const entry = body[nth];
    if (entry.type === 'ExportNamedDeclaration') {
      // Note the names and replace the export with the declaration.
      const declaration = entry.declaration;
      if (declaration.type === 'VariableDeclaration') {
        for (const declarator of declaration.declarations) {
          if (declarator.type === 'VariableDeclarator') {
            const name = declarator.id.name;
            exportNames.push(name);
          }
        }
        out.push(declaration);
      }
    } else {
      expressions.push(entry);
    }
  }

  // Set up a main.
  if (exportNames.includes('main')) {
    // They export a main function, so assume they know what they're doing.
    out.push(...expressions);
  } else {
    // They don't export a main function, so build one for them.
    if (expressions.length >= 1) {
      // Turn any final expression into a return statement.
      const last = expressions.length - 1;
      const tail = expressions[last];
      if (tail.type === 'ExpressionStatement') {
        expressions[last] = {
          type: 'ReturnStatement',
          argument: expressions[last]
        };
      }
    }
    const main = {
      type: 'VariableDeclaration',
      declarations: [{
        type: 'VariableDeclarator',
        id: {
          type: 'Identifier',
          name: 'main'
        },
        init: {
          type: 'ArrowFunctionExpression',
          id: null,
          params: [],
          body: {
            type: 'BlockStatement',
            body: expressions
          },
          generator: false,
          expression: true,
          async: true
        }
      }],
      kind: 'const'
    };
    out.push(main);
    exportNames.push('main');
  }

  // Return the exports as an object.
  out.push({
    type: 'ReturnStatement',
    argument: {
      type: 'ObjectExpression',
      properties:
            exportNames.map(name => ({
              type: 'Property',
              key: { type: 'Identifier', name },
              value: { type: 'Identifier', name }
            }))
    }
  });

  ast = {
    type: 'Program',
    body: out
  };

  return recast.print(ast).code;
};
