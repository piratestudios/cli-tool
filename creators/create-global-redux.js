var createDirectory = require('./fs').createDirectory;
var createFile = require('./fs').createFile;
var createFiles = require('./fs').createFiles;

module.exports = function (name) {
    console.log('Creating global redux component %s...', name);

    const
        fileTemplate = require('../templates/templateDuck.js')(name),
        type = 'redux',
        extensions = [];

    extensions.push('.js');

    createDirectory(type);
    createDirectory(type + "/" + name);
    createFiles(extensions, name, type, fileTemplate);

    console.log('Done creating global redux %s.', name);
};
