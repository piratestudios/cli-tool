var deleteDirectory = require('./fs').deleteDirectory;
var modifyLazyFileDel = require('./fs').modifyLazyFileDel;

module.exports = function (name) {
    console.log('Deleting presentational component %s...', name);

    const
        type = 'presentational';

    deleteDirectory(type, name, (err) => {
        if (err) throw err;
        modifyLazyFileDel(name, type);
        console.log('Done deleting presentational component %s.', name);
    });
};
