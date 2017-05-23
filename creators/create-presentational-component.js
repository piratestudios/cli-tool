var createDirectory = require('./fs').createDirectory;
var createFiles = require('./fs').createFiles;

module.exports = function (name) {
    console.log('Creating presentational component %s...', name);

    const
        type = 'presentational-component',
        extensions = [];

    console.log('Done creating presentational-component %s.', name);
};
