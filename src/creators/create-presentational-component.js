var createDirectory = require('./fs').createDirectory;
var setFile = require('./fs').setFile;
var existsDir = require('./fs').existsDir;

module.exports = function (type, component, name) {
    console.log('Creating presentational component %s...', name);

    const
        indexTemplate = require('../templates/templateIndex.js')(name),
        jsxTemplate = require('../templates/template.jsx')(name),
        testTemplate = require('../templates/template.test.js')(name),
        extensions = [];

    extensions.push('scss');
    extensions.push('css');
    extensions.push('test.js');
    extensions.push('jsx');

    if (existsDir(type) && existsDir(`${type}/${component}`)) {
        if (!existsDir(`${type}/${component}/${name}`))
            createDirectory(`${type}/${component}/${name}`);
        setFile(`${name}.scss`, `${type}/${component}/${name}`, '');
        setFile(`${name}.css`, `${type}/${component}/${name}`, '');
        setFile(`index.js`, `${type}/${component}/${name}`, indexTemplate);
        setFile(`${name}.jsx`, `${type}/${component}/${name}`, jsxTemplate);
        setFile(`${name}.test.js`, `${type}/${component}/${name}`, testTemplate);
        console.log('Done creating presentational component %s.', name);
    } else
        console.log('Path for the component not found.');
};
