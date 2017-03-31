import React, { Component } from 'react';

import Header from './header';

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children }
    </div>
  );
};

App.defaultProps = {
  children: <div />,
};

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;