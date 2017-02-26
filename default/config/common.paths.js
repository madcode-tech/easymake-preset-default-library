const path = require('path');

module.exports = function(rootConfig = {
  folder:     {},
  file:       {},
  extensions: {},
  test:       {}
}, { environment, config }) {
  const folderSource  = './source';

  rootConfig.folder['source']       = folderSource;
  rootConfig.folder['entry']        = folderSource;
  rootConfig.folder['tests']        = folderSource;
  rootConfig.folder['distributive'] = './distributive';
  rootConfig.folder['coverage']     = './coverage';

  rootConfig.file['distributive']   = 'index.js';
  rootConfig.file['entry']          = 'entry.js';

  rootConfig.extensions['script']   = ['.js'];

  // dot-folders like (.test) don't resolved by webpack now
  rootConfig.test['subFolder']      = '_test';
  rootConfig.test['fileSuffix']     = '.test';

  return rootConfig;
};
