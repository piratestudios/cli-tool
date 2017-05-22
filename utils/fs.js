var fs = require('fs');
var base = `${process.cwd()}/src/`;
var rimraf = require('rimraf');

module.exports = {
    createDirectory: function (path) {
        if (!fs.existsSync(base))
            fs.mkdirSync(base);
        if (!fs.existsSync(base + path))
            fs.mkdirSync(base + path);
    },

    deleteDirectory: function (type, path, cb) {
        path = base + type + "/" + path;
        if (fs.existsSync(path))
            rimraf(path, cb);
    },

    createFiles: function (extensions, name, component, template) {
        extensions.forEach((ext) => {
            var file = name + '.' + component + ext;
            module.exports.createFile(file, name, component, template);
        });
    },

    createFile: function (file, name, component, template) {
        const path = `${base}${component}/${name}/${file}`;
        if (fs.existsSync(path))
            fs.unlinkSync(path);
        fs.openSync(path, 'w', (err) => {
            if (err) throw err;
        });
        fs.writeFileSync(path, template, (err) => {
            if (err) throw err;
        });
    },

    modifyFile: function (ext, name, type, template) {
        const path = `${base}${type}/${name}/${name}.${type}.${ext}`;
        fs.writeFileSync(path, template, (err) => {
            if (err) throw err;
        });
    },

    modifyLazyFile: function (name, type) {
        const path = `${base}lazyLoading/loaderNameToPathMap.js`;
        const lineNumber = 14;
        const loadName = name.charAt(0).toUpperCase() + name.slice(1);
        var data = fs.readFileSync(path).toString().split("\n");
        data.splice(lineNumber, 0, `    load${loadName}: '${type}/${name}',`);
        var file = data.join("\n");
        fs.writeFile(path, file, function (err) {
            if (err) return console.log(err);
        });
    }
};
