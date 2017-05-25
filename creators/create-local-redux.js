var createDirectory = require('./fs').createDirectory;
var createFiles = require('./fs').createFiles;
var modifyFile = require('./fs').modifyFile;

module.exports = function (name) {
    console.log('Creating local redux component %s...', name);

    const
        fileTemplate = require('../templates/templateDuck.js')(name),
        fileName = `${name}.ducks.js`,
        type = 'components',
        extensions = [];

    extensions.push('ducks.js');

    createDirectory(type);
    createDirectory(type + "/" + name);
    createFiles(extensions, name, type, 'internal data');
    modifyFile('ducks.js', name, type, fileTemplate);

    console.log('Done creating local redux %s.', name);
};
