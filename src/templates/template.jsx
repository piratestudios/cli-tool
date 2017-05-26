module.exports = function (name) {
    return `
import React from 'react';
import PropTypes from 'prop-types';

import './${name}.css';

const ${name}View = (props) => {
    return (
        <div>
        <h1>{props.greeting}</h1>
        <button onClick={props.onClick}>click me</button>        
        </div>
    )
}

${name}View.propTypes = {
    greeting: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ${name}View;
    `;
}