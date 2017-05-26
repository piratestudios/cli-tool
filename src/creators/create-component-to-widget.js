var createDirectory = require('./fs').createDirectory;
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
        if (!existsDir(`${type}/${widget}/${name}`))
            createDirectory(`${type}/${widget}/${name}`);
        setFile(`${name}.scss`, `${type}/${widget}/${name}`, '');
        setFile(`${name}.css`, `${type}/${widget}/${name}`, '');
        setFile(`${name}.js`, `${type}/${widget}/${name}`, nameTemplate);
        setFile(`${name}.jsx`, `${type}/${widget}/${name}`, jsxTemplate);
        setFile(`${name}.test.js`, `${type}/${widget}/${name}`, testTemplate);
        console.log(`Done creating component ${name} in widget ${widget}.`);
    } else
        console.log('Path for the component not found.');


};
