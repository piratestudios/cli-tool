var createDirectory = require('./fs').createDirectory;
var createFiles = require('./fs').createFiles;
var createFile = require('./fs').createFile;
var modifyFile = require('./fs').modifyFile;
var modifyLazyFileAdd = require('./fs').modifyLazyFileAdd;

module.exports = function (name) {
    console.log('Creating stateful component %s...', name);

    const
        indexTemplate = require('../templates/templateIndex.js')(name),
        testTemplate = require('../templates/template.test.js')(name),
        nameTemplate = require('../templates/templateStateful.js')(name),
        type = 'stateful',
        extensions = [];

    extensions.push('test.js');
    extensions.push('js');

    createDirectory(type);
    createDirectory(type + "/" + name);
    createFiles(extensions, name, type, 'internal data');
    createFile('index.js', name, type, indexTemplate);
    modifyFile('js', name, type, nameTemplate);
    modifyFile('test.js', name, type, testTemplate);
    modifyLazyFileAdd(name, type);

    console.log('Done creating stateful component %s.', name);
};
