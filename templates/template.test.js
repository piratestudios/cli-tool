module.exports = function (name) {
    return `export {default as ${name}} from './${name}';`;
}