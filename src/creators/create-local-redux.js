var setFile = require('./fs').setFile;
var existsDir = require('./fs').existsDir;

module.exports = function (type, component, name) {
    console.log('Creating local redux component %s...', name);

    const
        fileTemplate = require('../templates/templateDuck.js')(component, name),
        fileName = `${name}.ducks.js`,
        extensions = [];

    extensions.push('ducks.js');

    if (existsDir(type) && existsDir(`${type}/${component}`)) {
        setFile(`${name}.ducks.js`, `${type}/${component}`, fileTemplate);
        console.log('Done creating local redux %s.', name);
    } else
        console.log('Path for the component not found.');
};
