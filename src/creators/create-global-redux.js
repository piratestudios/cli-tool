var createDirectory = require('./fs').createDirectory;
var createFile = require('./fs').createFile;

module.exports = function (name) {
    console.log('Creating global redux component %s...', name);

    const
        fileTemplate = require('../templates/templateDuck.js')(name),
        fileName = `${name}.ducks.js`;

    createDirectory('redux');
    createDirectory('redux/modules');
    createFile(fileName, 'modules', 'redux', fileTemplate);

    console.log('Done creating global redux %s.', name);
};
