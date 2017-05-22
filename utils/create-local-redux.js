var createDirectory = require('./fs').createDirectory;
var createFiles = require('./fs').createFiles;

module.exports = function (name) {
    console.log('Creating local redux component %s...', name);

    const
        type = 'local-redux',
        extensions = [];

    console.log('Done creating local redux %s.', name);
};
