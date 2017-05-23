var createDirectory = require('./fs').createDirectory;
var createFiles = require('./fs').createFiles;

module.exports = function (name) {
    console.log('Creating global redux component %s...', name);

    const
        type = 'global-redux',
        extensions = [];

    console.log('Done creating global redux %s.', name);
};
