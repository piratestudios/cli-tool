var setFile = require('./fs').setFile;
var existsDir = require('./fs').existsDir;

module.exports = function (name, type, component) {
    console.log('Creating presentational component %s...', name);

    const
        jsxTemplate = require('../templates/template.jsx')(name),
        testTemplate = require('../templates/template.test.js')(name),
        extensions = [];

    extensions.push('scss');
    extensions.push('css');
    extensions.push('test.js');
    extensions.push('jsx');

    if (existsDir(type) && existsDir(`${type}/${component}`)) {
        setFile(`${name}.scss`, `${type}/${component}`, '');
        setFile(`${name}.css`, `${type}/${component}`, '');
        setFile(`${name}.jsx`, `${type}/${component}`, jsxTemplate);
        setFile(`${name}.test.js`, `${type}/${component}`, testTemplate);
    } else
        console.log('Path for the component not found.');


    console.log('Done creating presentational component %s.', name);
};
