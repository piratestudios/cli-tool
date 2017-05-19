var createDirectory = require('./file').createDirectory;
var createFiles = require('./file').createFiles;
var writeToFile = require('./file').writeToFile;
var createPjson = require('./file').createPjson;

module.exports = function (name) {
    console.log('component %s', name);
}
