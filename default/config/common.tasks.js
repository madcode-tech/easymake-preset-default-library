module.exports = function(rootConfig = {}, { environment, config }) {
  return Object.assign(rootConfig, {
    'create-folders':   null,
    'clean':            null,
    'do-distributive':  null,
    'do-test-units':    null,

    'test-units': {
      dependencies: ['clean', 'do-test-units'],
      empty: true
    },
    'distributive': {
      dependencies: ['clean', 'do-distributive'],
      empty: true,
      default: true
    }
  });
};
