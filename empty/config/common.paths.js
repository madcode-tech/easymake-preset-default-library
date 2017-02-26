module.exports = function(rootConfig = {
  folder:     {},
  file:       {},
  extensions: {},
  test:       {}
}, api) {
  // all items in "folder" property will be resolved by root of project

  //rootConfig.folder['source']       = './path/to/source';
  //rootConfig.folder['entry']        = './path/to/entry/file';
  //rootConfig.folder['tests']        = './path/to/tests';
  //rootConfig.folder['distributive'] = './path/to/distributive';
  //rootConfig.folder['coverage']     = './path/where/test/coverage/report/will/be/written';

  //rootConfig.file['distributive']   = 'distributive.file.name.js';
  //rootConfig.file['entry']          = 'source.entry.file.name.js';

  //rootConfig.extensions['script']   = ['.js', '.jsx', '.ts'];

  // dot-folders like (.test) don't resolved by webpack now
  //rootConfig.test['subFolder']      = '_test';
  //rootConfig.test['fileSuffix']     = '.test';

  return rootConfig;
};
