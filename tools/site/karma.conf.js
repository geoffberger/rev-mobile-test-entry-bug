const resolve = require('path').resolve;
const setup = require('../karma-setup');

module.exports = setup({
  basePath: resolve(__dirname, '..', '..'),

  files: [
    'src/scripts/test-index.js',
  ],

  preprocessors: {
    'src/scripts/test-index.js': ['webpack', 'sourcemap'],
  },

  junitReporter: {
    outputFile: 'site-test-results.xml',
  }
});
