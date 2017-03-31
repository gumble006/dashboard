import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Menu from './menu';

class Home extends Component {

  componentWillMount() {
    if (!this.props.settings) {
      this.props.fetchUser();
    }
  }

  render() {
    if (this.props.authenticated && !this.props.settings) {
      return (
        <div>Loading...</div>
      );
    }
    
    return (
      <div className="Home">
        <div className="d-flex" >
          <div className="col-2 menu-parent">
            <Menu />
          </div>
          <div className="col-10 dashboard-parent">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
  settings: null,
};

Home.propTypes = {
  authenticated: React.PropTypes.bool.isRequired,
  settings: React.PropTypes.object,
  fetchUser: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    settings: state.auth.user,
  };
}

export default connect(mapStateToProps, actions)(Home);
