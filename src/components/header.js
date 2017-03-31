import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

class Header extends Component {
  
  showNavLinks() {
    if (this.props.authenticated && this.props.user) {
      const { avatarUrl, githubName } = this.props.user;

      return [
        <li className="nav-item align-self-center" key={1}>
          <img src={avatarUrl} className="avatar" title={githubName} alt="Github avatar" />
        </li>,
        <li className="nav-item align-self-center" key={2} >
          <Link to="/signout" className="nav-link btn btn-primary">Sign Out</Link>
        </li>,
      ];
    }

    return (
      <li className="nav-item align-self-center" >
        <Link to="/signin" className="nav-link btn btn-primary">Sign In</Link>
      </li>
    ); 
  }

  render() {
    return (
      <div className="container-fluid header">
        <nav className="navbar">  
          <ul className="nav justify-content-end">
            <li className="nav-item mr-auto">
              <Link className="nav-link" to="/">
                <h1>Logo & Co.</h1>
              </Link>
            </li>

            { this.showNavLinks() }

          </ul>
        </nav>
      </div>
    );  
  }
}

Header.defaultProps = {
  user: null,
};

Header.propTypes = {
  authenticated: React.PropTypes.bool.isRequired,
  user: React.PropTypes.shape({
    githubName: React.PropTypes.string,
    avatarUrl: React.PropTypes.string,
  }),
};


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user: state.auth.user,
  };
}

export default connect(mapStateToProps, actions)(Header);