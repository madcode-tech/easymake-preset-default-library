module.exports = function(
  rootConfig = {},
  { environment, config },
  { entry, contexts }
) {
  const { context, paths: { extensions } } = environment;

  return Object.assign(rootConfig, {
    context,
    devtool: 'inline-source-map',

    module: {
      rules: config.load(
        'webpack.rules',
        { exclude: [entry], forTesting: true }
      )
    },

    resolve: {
      extensions: extensions.script
    },

    plugins: config.load('webpack.plugins', { testingContexts: contexts })
  });
};
