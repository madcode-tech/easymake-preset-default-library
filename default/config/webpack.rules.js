const path = require('path');
const script = require('./webpack.rules.script.js');

module.exports = function(
  rootConfig = [],
  api,
  { exclude: excl = [], forTesting } = {}
) {
  const {
    paths: { extensions }
  } = api.environment;

  function tester(ext) {
    const { script } = extensions;

    if ((script.indexOf(ext) == -1) && (other.indexOf(ext) == -1)) {
      throw 'Unknown extension: ' + ext;
    }

    return new RegExp('\\' + ext + '$');
  }

  const exclude = [
    /(node_modules|bower_components)/
  ].concat(excl);

  return rootConfig.concat([
    script(api, { test: tester('.js'),    exclude, forTesting })
  ]);
}
