#! /usr/bin/env node

var program = require('commander');
var pJson = require('./package.json');

var createComponent = require('./creators/create-component');
var createWidgetComponent = require('./creators/create-widget-component');
var createPresentationalComponent = require('./creators/create-presentational-component');
var createStatefulComponent = require('./creators/create-stateful-component');
var createLocalRedux = require('./creators/create-local-redux');
var createGlobalRedux = require('./creators/create-global-redux');
var deleteComponent = require('./creators/delete-component');
var deleteWidgetComponent = require('./creators/delete-widget-component');
var deletePresentationalComponent = require('./creators/delete-presentational-component');
var deleteStatefulComponent = require('./creators/delete-stateful-component');

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
    console.log('    generate d   <name-component-to-be-deleted>');
    console.log('    generate dw  <name-widget-to-be-deleted>');
    console.log('    generate dpc <name-presentational-to-be-deleted>');
    console.log('    generate dsc <name-stateful-to-be-deleted>');
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
    .description('Delete Component named <name>')
    .action(function (name) {
        deleteComponent(name);
    });

program
    .command('dw <name>')
    .description('Delete Widget named <name>')
    .action(function (name) {
        deleteWidgetComponent(name);
    });

program
    .command('dpc <name>')
    .description('Delete Presentational named <name>')
    .action(function (name) {
        deletePresentationalComponent(name);
    });

program
    .command('dsc <name>')
    .description('Delete Stateful named <name>')
    .action(function (name) {
        deleteStatefulComponent(name);
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
        args[0] !== 'd' &&
        args[0] !== 'dw' &&
        args[0] !== 'dpc' &&
        args[0] !== 'dsc'
    ))
    program.outputHelp();
