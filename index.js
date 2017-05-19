#! /usr/bin/env node

var program = require('commander');
var package = require('./package.json');

program
    .version(package.version)

program.on('--help', function () {
    console.log('  Examples:');
    console.log('');
    console.log('    $ generate --help');
    console.log('');
});

program.parse(process.argv);

// let args = process.argv.slice(2);

if (!program.version)
    console.log(program.version())

