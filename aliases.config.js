const path = require('path');
const fs = require('fs');
const prettier = require('prettier');

const aliases = {
  '@': '.',
  '@src': './src',
  '@components': './src/components',
  '@assets': './src/assets',
};

module.exports = {
  webpack: {},
  tsconfig: {},
};

for (const alias in aliases) {
  const srcPath = aliases[alias];
  // Webpack Aliases
  module.exports.webpack[alias] = resolveSrc(srcPath);
  // Typescript Aliases
  module.exports.tsconfig[alias + '/*'] = [srcPath + '/*'];
  module.exports.tsconfig[alias] = srcPath.includes('/index.')
    ? [srcPath]
    : [
        srcPath + '/index.ts',
        srcPath + '/index.json',
        srcPath + '/index.vue',
        srcPath + '/index.scss',
        srcPath + '/index.css',
      ];
}

const tsconfigTemplate = require('./tsconfig.template');
const tsConfigPath = path.resolve(__dirname, 'tsconfig.json');

try {
  fs.writeFileSync(
    tsConfigPath,
    prettier.format(
      JSON.stringify({
        ...tsconfigTemplate,
        compilerOptions: {
          ...(tsconfigTemplate.compilerOptions || {}),
          paths: module.exports.tsconfig,
        },
      }),
      {
        ...require('./.prettierrc'),
        parser: 'json',
      }
    ),
    { encoding: 'utf-8' }
  );
} catch (error) {
  console.error('Error creating tsconfig file.');
  throw error;
}

function resolveSrc(_path) {
  return path.resolve(_path);
}
