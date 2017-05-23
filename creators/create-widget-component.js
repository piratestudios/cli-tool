var createDirectory = require('./fs').createDirectory;
var createFiles = require('./fs').createFiles;

module.exports = function (name) {
    console.log('Creating widget component %s...', name);

    const
        type = 'widgets',
        extensions = [];

    console.log('Done creating widget component %s.', name);
};
