module.exports = function (name) {
    return `
import ${name} from './${name}';
export default ${name};
    `;
}