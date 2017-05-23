module.exports = function (name) {
  return `
import './${name}.css';

import React from 'react';
import PropTypes from 'prop-types';

const ${name} = (props) => {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <button onClick={props.onClick}>click me</button>
    </div>
  )
}

${name}Comp.propTypes = {
  greeting: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ${name};
    `;
}