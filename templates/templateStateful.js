module.exports = function (name) {
  return `
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ${name} from './${name}';

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

${name}.defaultProps = {
  greeting: 'hello world'
}

${name}.propTypes = {
  greeting: PropTypes.string,
  handleButtonClick: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(${name})
    `;
}