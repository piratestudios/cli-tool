#! /usr/bin/env node

var program = require('commander');
var pJson = require('./package.json');
var createComponent = require('./utils/create-component');

const args = process.argv.slice(2)

program.version(pJson.version)

program.on('--help', function () {
    console.log('  Examples:');
    console.log('');
    console.log('    generate c <name-component>');
    console.log('');
});

program
    .command('c <name>')
    .description('generate component named <name>')
    .action(function (name) {
        createComponent(name);
    });

program.parse(process.argv);

if (!program.version)
    console.log(program.version())

if (!args.length || args[0] !== 'c')
    program.outputHelp();

// console.log(args[0])