var createDirectory = require('./fs').createDirectory;
var setFile = require('./fs').setFile;
var existsDir = require('./fs').existsDir;

module.exports = function (type, component, name) {
    console.log('Creating stateful component %s...', name);

    const
        jsxTemplate = require('../templates/template.jsx')(name),
        indexTemplate = require('../templates/templateIndex.js')(name),
        testTemplate = require('../templates/template.test.js')(name),
        nameTemplate = require('../templates/templateStateful.js')(name),
        extensions = [];

    extensions.push('scss');
    extensions.push('css');
    extensions.push('test.js');
    extensions.push('js');
    extensions.push('jsx');

    if (existsDir(type) && existsDir(`${type}/${component}`)) {
        if (!existsDir(`${type}/${component}/${name}`))
            createDirectory(`${type}/${component}/${name}`);
        setFile(`${name}.scss`, `${type}/${component}/${name}`, '');
        setFile(`${name}.css`, `${type}/${component}/${name}`, '');
        setFile('index.js', `${type}/${component}/${name}`, indexTemplate);
        setFile(`${name}.js`, `${type}/${component}/${name}`, nameTemplate);
        setFile(`${name}.test.js`, `${type}/${component}/${name}`, testTemplate);
        setFile(`${name}.jsx`, `${type}/${component}/${name}`, jsxTemplate);
        console.log('Done creating stateful component %s.', name);
    } else
        console.log('Path for the component not found.');
};
