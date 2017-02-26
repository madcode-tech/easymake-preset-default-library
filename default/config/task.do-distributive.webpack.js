const isPlainObject = require('is-plain-object');
const { throwIf } = require('madcode-utils-checkers');
const path = require('path');

module.exports = function(rootConfig = {}, { environment, config }) {
  const {
    production,
    context,
    paths: {
      folder: { entry: folderEntry, distributive: folderDistributive },
      file: { entry: fileEntry, distributive: fileDistributive },
      extensions
    },
    packageJSON: {
      name,
      config: {
        easymake: {
          libraryTarget = 'commonjs2'
        } = {}
      } = {}
    }
  } = environment;

  return Object.assign(rootConfig,
    {
      context,
      entry: path.resolve(folderEntry, fileEntry),
      output: {
        path:           folderDistributive,
        filename:       fileDistributive,
        library:        name,
        libraryTarget
      },
      externals: config.load('webpack.libraries'),
      watch: !production,
      plugins: config.load('webpack.plugins'),
      devtool: !production && 'source-map',
      profile: true,
      resolve: {
        extensions: extensions.script
      },
      module: {
        rules: config.load('webpack.rules')
      }
    }
  );
};
