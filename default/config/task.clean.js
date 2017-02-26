module.exports = function (rootConfig = [], { environment, config }) {
  const { paths: { folder: { distributive, coverage } } } = environment;

  return rootConfig.concat([distributive, coverage]);
};
