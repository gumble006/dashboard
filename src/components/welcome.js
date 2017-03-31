import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class Welcome extends Component {

  componentWillMount() {
    if (this.props.authenticated) {
      browserHistory.push('/home');
    }  
  }

  render(){
    return(
      <div className="text-center">
        <br />
        <br />
        <br />
        <br />
        <h4>Welcome</h4>
      </div>
    );
  }

} 

Welcome.defaultProps = {
  authenticated: false,
};

Welcome.propTypes = {
  authenticated: React.PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, null)(Welcome);
