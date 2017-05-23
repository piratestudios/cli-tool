module.exports = function (name) {
  return `
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import ${name}Comp from './${name}'

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

class ${name} extends PureComponent{

  constructor(props){
    super(props)
    this.state = {}
  }

  render({greeting, handleButtonClick}){
    return (
      <div>
        <${name}Comp greeting={greeting} onClick={handleButtonClick} />
      </div>
    )
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