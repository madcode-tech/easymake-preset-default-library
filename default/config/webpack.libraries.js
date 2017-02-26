module.exports = function(rootConfig = {}, { environment, config }) {
  const {
    packageJSON: {
      dependencies = {},
      config: {
        easymake: {
          libraryBundle = []
        } = {}
      } = {}
    }
  } = environment;

  Object.keys(dependencies).forEach(function(library) {
    (libraryBundle.indexOf(library) == -1) && (
      rootConfig[library] = {
        commonjs:   library,
        commonjs2:  library,
        amd:        library
      }
    );
  });

  return rootConfig;
}
