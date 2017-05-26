var deleteDirectory = require('./fs').deleteDirectory;
var modifyLazyFileDel = require('./fs').modifyLazyFileDel;

module.exports = function (name) {
    console.log('Deleting widget component %s...', name);

    const
        type = 'widgets';

    deleteDirectory(type, name, (err) => {
        if (err) throw err;
        modifyLazyFileDel(name, type);
        console.log('Done deleting widget component %s.', name);
    });
};
