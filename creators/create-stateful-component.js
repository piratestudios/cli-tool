var setFile = require('./fs').setFile;
var existsDir = require('./fs').existsDir;

module.exports = function (name, type, component) {
    console.log('Creating stateful component %s...', name);

    const
        indexTemplate = require('../templates/templateIndex.js')(name),
        testTemplate = require('../templates/template.test.js')(name),
        nameTemplate = require('../templates/templateStateful.js')(name),
        extensions = [];

    extensions.push('test.js');
    extensions.push('js');

    if (existsDir(type) && existsDir(`${type}/${component}`)) {
        setFile('index.js', `${type}/${component}`, indexTemplate);
        setFile(`${name}.js`, `${type}/${component}`, nameTemplate);
        setFile(`${name}.test.js`, `${type}/${component}`, testTemplate);
        console.log('Done creating stateful component %s.', name);
    } else
        console.log('Path for the component not found.');
};
