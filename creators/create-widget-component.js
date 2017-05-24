var createDirectory = require('./fs').createDirectory;
var createFiles = require('./fs').createFiles;
var createFile = require('./fs').createFile;
var modifyFile = require('./fs').modifyFile;
var modifyLazyFileAdd = require('./fs').modifyLazyFileAdd;

module.exports = function (name) {
    console.log('Creating widget component %s...', name);

    const
        indexTemplate = require('../templates/templateIndex.js')(name),
        jsxTemplate = require('../templates/template.jsx')(name),
        testTemplate = require('../templates/template.test.js')(name),
        nameTemplate = require('../templates/template.js')(name),
        type = 'widgets',
        extensions = [];

    extensions.push('scss');
    extensions.push('css');
    extensions.push('test.js');
    extensions.push('jsx');
    extensions.push('js');

    createDirectory(type);
    createDirectory(type + "/" + name);
    createFiles(extensions, name, type, 'internal data');
    createFile('index.js', name, type, indexTemplate);
    modifyFile('js', name, type, nameTemplate);
    modifyFile('jsx', name, type, jsxTemplate);
    modifyFile('test.js', name, type, testTemplate);
    modifyLazyFileAdd(name, type);


    console.log('Done creating widget component %s.', name);
};
