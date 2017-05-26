var deleteDirectory = require('./fs').deleteDirectory;
var modifyLazyFileDel = require('./fs').modifyLazyFileDel;

module.exports = function (name) {
    console.log('Deleting component %s...', name);

    const
        type = 'components';

    deleteDirectory(type, name, (err) => {
        if (err) throw err;
        modifyLazyFileDel(name, type);
        console.log('Done deleting component %s.', name);
    });
};
