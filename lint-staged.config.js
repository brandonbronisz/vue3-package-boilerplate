module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'yarn lint:eslint',
    'yarn lint:prettier',
    'yarn test:unit:file',
  ],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'yarn lint:prettier --parser json',
  ],
  'package.json': ['yarn lint:prettier'],
  '*.vue': ['yarn lint:eslint', 'yarn lint:prettier', 'yarn test:unit:file'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged'],
};
