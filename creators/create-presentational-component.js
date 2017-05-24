var createDirectory = require('./fs').createDirectory;
var createFiles = require('./fs').createFiles;

module.exports = function (name) {
    console.log('Creating presentational component %s...', name);

    const
        indexTemplate = require('../templates/templatePresentational.js')(name),
        jsxTemplate = require('../templates/template.jsx')(name),
        testTemplate = require('../templates/template.test.js')(name),
        type = 'presentational-component',
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

    console.log('Done creating presentational-component %s.', name);
};
