var createDirectory = require('./fs').createDirectory;
var createFiles = require('./fs').createFiles;
var createFile = require('./fs').createFile;
var modifyFile = require('./fs').modifyFile;

module.exports = function (name) {
    console.log('Creating component %s...', name);

    const
        indexTemplate = require('../templates/templateIndex.js')(name),
        jsxTemplate = require('../templates/templateIndex.jsx')(name),
        scssTemplate = require('../templates/templateIndex.scss')(name),
        testTemplate = require('../templates/templateIndex.test.js')(name),
        nameTemplate = require('../templates/templateIndex.js')(name),
        type = 'containers',
        extensions = [];

    extensions.push('.scss');
    extensions.push('.test.js');
    extensions.push('.jsx');
    extensions.push('.js');

    createDirectory(type);
    createDirectory(type + "/" + name);
    createFiles(extensions, name, type, 'internal data');
    modifyFile('index.js', name, type, indexTemplate);
    createFile(`${name}.js`, name, type, nameTemplate);
    createFile(`${name}.jsx`, name, type, jsxTemplate);
    createFile(`${name}.test.js`, name, type, testTemplate);
    createFile(`${name}.scss`, name, type, scssTemplate);

    console.log('Done creating component %s.', name);
};
