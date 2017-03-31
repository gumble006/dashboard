import React from 'react';

const Signin = () => {
  return (
    <div className="mx-auto text-center">
      <br />
      <br />
      <br />
      <a href="http://127.0.0.1:3000/api/github" className="btn btn-primary btn-github">
        <i className="fa fa-github align-middle" aria-hidden="true" />
        Login with Github
      </a>
    </div>
  );
};

export default Signin;