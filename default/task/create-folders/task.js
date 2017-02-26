const isPlainObject = require('is-plain-object');
const path = require('path');

module.exports = function ({ environment, api }) {
  const { files } = api;
  const {
    context,
    paths: {
      folder,
      file: { entry },
      test: {
        subFolder: testSubFolder,
        fileSuffix: testFileSuffix
      },
      extensions: { 'script': extensions }
    }
  } = environment;

  const contentEntry      = '// source entry file';
  const contentTest       = '// test for entry file';
  const contentGitIgnore  =
    "node_modules\n" +
    "**/npm-debug.log\n" +
    folder.coverage + "\n";

  ['distributive', 'source', 'entry', 'tests'].forEach(
    function(type) {
      files.folderCreate(folder[type]);
    }
  );

  let testFolder = folder['tests'];

  if (testSubFolder != null) {
    testFolder = path.join(testFolder, testSubFolder);

    files.folderCreate(testFolder);
  }

  function safeWriteFile(path, content) {
    !files.fileExists(path) && files.fileWrite(path, content);
  }

  const entries = [];

  if (typeof entry == 'string') { entries.push(entry); }
  if (Array.isArray(entry)) { entries.push(...entry); }
  if (isPlainObject(entry)) {
    Object.keys(entry).forEach( function(name) { entries.push(entry[name]); } );
  }

  entries.forEach(
    function(entry) {
      const extension = extensions.reduce(function(result, extension) {
        return entry.substr(-1 * extension.length) == extension ? extension : result;
      }, '.js');

      safeWriteFile(path.join(folder['entry'], entry), contentEntry);

      safeWriteFile(
        path.join(
          testFolder,
          entry.substr(0, entry.length - extension.length) +
            (testFileSuffix || '') +
            extension
        ),
        contentTest
      );
    }
  );

  safeWriteFile(path.join(context, '.gitignore'), contentGitIgnore);
};
