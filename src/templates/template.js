module.exports = function (name) {
  return `
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ${name}View from './${name}.jsx';

function mapStateToProps(state) {
  return {
    greeting: state.greeting
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleButtonClick: () => {
      dispatch({type: 'FAKE_ACTION', payload: 'nothing to see here'})
      alert('button clicked')
    }
  }
}

const ${name} = (props) => {
  return (
    <div>
      <${name}View greeting={props.greeting} onClick={props.handleButtonClick} />
    </div>
  )
}

${name}.defaultProps = {
  greeting: '${name} greeting'
}

${name}.propTypes = {
  greeting: PropTypes.string,
  handleButtonClick: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(${name})
    `;
}