var createDirectory = require('./fs').createDirectory;
var createFiles = require('./fs').createFiles;
var createFile = require('./fs').createFile;

module.exports = function (name) {
    console.log('Creating component %s...', name);

    const
        indexTemplate = require('../templates/index.js')(name),
        type = 'containers',
        extensions = [];

    extensions.push('.scss');
    extensions.push('.test.js');
    extensions.push('.jsx');
    extensions.push('.js');

    createDirectory(type);
    createDirectory(type + "/" + name);
    createFiles(extensions, name, type, 'internal data file');
    createFile('index.js', name, type, indexTemplate);

    console.log('Done creating component %s.', name);
};
