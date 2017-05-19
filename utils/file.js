var fs = require('fs');
var exec = require('child_process');

module.exports = {

    createDirectory: function (component) {
        exec('mkdir ' + component, (err, stdout) => {
            if (err) throw err;
        });
    },

    createFiles: function (extensions, action, subDir, component, template, cb) {
        extensions.forEach((ext) => {
            exec(action + subDir + component + ext, (err, stdout) => {
                if (err) { throw err };
                if (ext === '.js' || ext === '.jsx') {
                    // Writing up markup to component (.js or jsx) file
                    cb(subDir, component, ext, template);
                }
            });
        })
    },

    writeToFile: function (subDir, component, ext, compTmpl) {
        fs.writeFile(subDir + component + ext, compTmpl, (err) => {
            if (err) throw err;
        })
    },

    createPjson: function (action, subDir, template) {
        exec(action + subDir + 'package.json', () => {
            fs.writeFile(subDir + 'package.json', template, (err) => {
                if (err) throw err;
            })
        });
    }
}
