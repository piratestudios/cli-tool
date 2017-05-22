#! /usr/bin/env node

var program = require('commander');
var pJson = require('./package.json');

var createWidgetComponent = require('./utils/create-widget-component');
var createPresentationalComponent = require('./utils/create-presentational-component');
var createComponent = require('./utils/create-component');
var createStatefulComponent = require('./utils/create-stateful-component');
var createLocalRedux = require('./utils/create-local-redux');
var createGlobalRedux = require('./utils/create-global-redux');
var deleteComponent = require('./utils/delete-component');

const args = process.argv.slice(2);

program.version(pJson.version);

program.on('--help', function () {
    console.log('  Examples:');
    console.log('');
    console.log('    generate w  <name-widget>');
    console.log('    generate pc <name-presentational-component>');
    console.log('    generate c  <name-component>');
    console.log('    generate sc <name-stateful-component>');
    console.log('    generate lr <name-local-redux>');
    console.log('    generate gr <name-global-redux>');
    console.log('');
});

program
    .command('w <name>')
    .description('Generate Widget named <name>')
    .action(function (name) {
        createWidgetComponent(name);
    });

program
    .command('pc <name>')
    .description('Generate Presentational Component named <name>')
    .action(function (name) {
        createPresentationalComponent(name);
    });

program
    .command('c <name>')
    .description('Generate Component named <name>')
    .action(function (name) {
        createComponent(name);
    });

program
    .command('sc <name>')
    .description('Generate Stateful Component named <name>')
    .action(function (name) {
        createStatefulComponent(name);
    });

program
    .command('lr <name>')
    .description('Generate Local Redux named <name>')
    .action(function (name) {
        createLocalRedux(name);
    });

program
    .command('gr <name>')
    .description('Generate Global Redux named <name>')
    .action(function (name) {
        createGlobalRedux(name);
    });

program
    .command('d <name>')
    .description('Delete component named <name>')
    .action(function (name) {
        deleteComponent(name);
    });

program.parse(process.argv);

if (!program.version)
    console.log(program.version())

if (!args.length ||
    (
        args[0] !== 'w' &&
        args[0] !== 'pc' &&
        args[0] !== 'c' &&
        args[0] !== 'sc' &&
        args[0] !== 'lr' &&
        args[0] !== 'gr' &&
        args[0] !== 'd'
    ))
    program.outputHelp();

// console.log(args[0])
