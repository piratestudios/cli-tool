module.exports = function (name) {
  return `
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
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

class ${name} extends PureComponent{

  constructor(props){
    super(props)
    this.state = {}
  }

/*
  
  componentWillReceiveProps(nextProps){
     // componentWillReceive props can be called even when props haven't changed
     // so if using this function, check values have changed before running any other code
     if (props.someValue !== nextProps.someValue){
        // then do some
     }
  }
  
*/  

  render(){
    const {greeting, handleButtonClick} = this.props
    return (
      <div>
        <${name}View greeting={greeting} onClick={handleButtonClick} />
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