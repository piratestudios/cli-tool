#! /usr/bin/env node

var program = require('commander');
var package = require('./package.json');

program.version(package.version)

program.on('--help', function () {
    console.log('  Examples:');
    console.log('');
    console.log('    $ generate g <name-component>');
    console.log('');
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}

if (!program.version)
    console.log(program.version())

