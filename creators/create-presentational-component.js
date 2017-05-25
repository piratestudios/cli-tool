var setFile = require('./fs').setFile;
var existsDir = require('./fs').existsDir;

module.exports = function (name, type, component) {
    console.log('Creating presentational component %s...', name);

    const
        nameTemplate = require('../templates/templatePresentational.js')(name),
        jsxTemplate = require('../templates/template.jsx')(name),
        testTemplate = require('../templates/template.test.js')(name),
        extensions = [];

    extensions.push('scss');
    extensions.push('css');
    extensions.push('test.js');
    extensions.push('jsx');
    extensions.push('js');

    if (existsDir(type) && existsDir(`${type}/${component}`)) {
        setFile(`${name}.scss`, `${type}/${component}`, '');
        setFile(`${name}.css`, `${type}/${component}`, '');
        setFile(`${name}.js`, `${type}/${component}`, nameTemplate);
        setFile(`${name}.jsx`, `${type}/${component}`, jsxTemplate);
        setFile(`${name}.test.js`, `${type}/${component}`, testTemplate);
    }

    console.log('Done creating presentational component %s.', name);
};
