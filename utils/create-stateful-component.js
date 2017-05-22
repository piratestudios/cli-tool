var createDirectory = require('./fs').createDirectory;
var createFiles = require('./fs').createFiles;

module.exports = function (name) {
    console.log('Creating stateful component %s...', name);

    const
        type = 'stateful-component',
        extensions = [];

    console.log('Done creating stateful component %s.', name);
};
