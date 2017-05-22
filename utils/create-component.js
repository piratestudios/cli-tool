var createDirectory = require('./fs').createDirectory;
var createFiles = require('./fs').createFiles;
var createFile = require('./fs').createFile;

module.exports = function (name) {
    console.log('Creating component %s...', name);

    const
        type = 'containers',
        extensions = [];

    extensions.push('.scss');
    extensions.push('.test.js');
    extensions.push('.jsx');
    extensions.push('.js');

    createDirectory(type);
    createDirectory(type + "/" + name);
    createFiles(extensions, name, type, 'internal data file');
    createFile('index.js', name, type, `export {default as ${name}} from './${name}'`);

    console.log('Done creating component %s.', name);
};
