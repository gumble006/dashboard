import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SignedIn extends Component {

  componentWillMount() {
    // signin user with token
    if (this.props.location.query.token) {
      this.props.signinUser(this.props.location.query.token);
    }
  }

  render(){
    return (
      <div />
    );
  }
}

export default connect(null, actions)(SignedIn);