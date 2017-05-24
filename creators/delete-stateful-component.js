var deleteDirectory = require('./fs').deleteDirectory;
var modifyLazyFileDel = require('./fs').modifyLazyFileDel;

module.exports = function (name) {
    console.log('Deleting stateful component %s...', name);

    const
        type = 'stateful';

    deleteDirectory(type, name, (err) => {
        if (err) throw err;
        modifyLazyFileDel(name, type);
        console.log('Done deleting stateful component %s.', name);
    });
};
