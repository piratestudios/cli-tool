var fs = require('fs');
var base = `${process.cwd()}/src/`;
var rimraf = require('rimraf');

module.exports = {
    existsDir: function (path) {
        return fs.existsSync(base + path);
    },

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
            var file = `${name}.${ext}`;
            module.exports.createFile(file, name, component, template);
        });
    },

    createFile: function (file, name, component, template) {
        const path = `${base}${component}/${name}/${file}`;
        if (fs.existsSync(path))
            fs.unlinkSync(path);
        fs.openSync(path, 'w');
        fs.writeFileSync(path, template);
    },

    modifyFile: function (ext, name, type, template) {
        const path = `${base}${type}/${name}/${name}.${ext}`;
        fs.writeFileSync(path, template);
    },

    setFile: function (name, path, template) {
        fs.writeFileSync(`${base}/${path}/${name}`, template);
    },

    modifyLazyFileAdd: function (name, type) {
        const path = `${base}utils/lazyLoading/loadersIndex.js`;
        const textToFind = 'const loadersIndex = [\r';
        const lineNumber = module.exports.getLineNumber(path, textToFind) + 1;
        var data = fs.readFileSync(path).toString().split("\n");
        data.splice(lineNumber, 0, `    {name: '${name}', importFn: () => (import('../../${type}/${name}'))},`);
        var file = data.join("\n");
        fs.writeFile(path, file, function (err) {
            if (err) return console.log(err);
        });
    },

    modifyLazyFileDel: function (name, type) {
        const path = `${base}utils/lazyLoading/loadersIndex.js`;
        const textToFind = `    { name: '${name}', importPath: '${type}/${name}' },`;
        const lineNumber = module.exports.getLineNumber(path, textToFind);
        var data = fs.readFileSync(path).toString().split("\n");
        data.splice(lineNumber, 1);
        var file = data.join("\n");
        fs.writeFile(path, file, function (err) {
            if (err) return console.log(err);
        });
    },

    getLineNumber: function (filename, textToFind) {
        var data = fs.readFileSync(filename, 'utf8');
        var lines = data.split("\n");
        var n = 0;
        for (var i = 0; i < lines.length; i++) {
            if (lines[i] == textToFind)
                n = i;
            if (n > 0) break;
        }
        return n;
    }
};
