module.exports = function (name) {
    return `
import React from 'react';
import PropTypes from 'prop-types';

const ${name} = (props) => {
    return (
        <div>
        <h1>{props.greeting}</h1>
        </div>
    )
}

${name}.propTypes = {
    greeting: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ${name};
    `;
}