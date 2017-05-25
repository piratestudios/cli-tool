var setFile = require('./fs').setFile;
var existsDir = require('./fs').existsDir;

module.exports = function (type, widget, name) {
    console.log(`Creating component ${name} to widget ${widget}...`);

    const
        indexTemplate = require('../templates/templateIndex.js')(name),
        jsxTemplate = require('../templates/template.jsx')(name),
        testTemplate = require('../templates/template.test.js')(name),
        nameTemplate = require('../templates/template.js')(name),
        extensions = [];

    extensions.push('scss');
    extensions.push('css');
    extensions.push('test.js');
    extensions.push('jsx');
    extensions.push('js');

    if (existsDir(type) && existsDir(`${type}/${widget}`)) {
        setFile(`${name}.scss`, `${type}/${widget}`, '');
        setFile(`${name}.css`, `${type}/${widget}`, '');
        setFile(`${name}.js`, `${type}/${widget}`, nameTemplate);
        setFile(`${name}.jsx`, `${type}/${widget}`, jsxTemplate);
        setFile(`${name}.test.js`, `${type}/${widget}`, testTemplate);
        console.log(`Done creating component ${name} in widget ${widget}.`);
    } else
        console.log('Path for the component not found.');


};
