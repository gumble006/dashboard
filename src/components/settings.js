import React from 'react';

const Settings = (props) => {
  return (
    <div className="text-center">
      Settings
      {props.children}
    </div>
  );
};

export default Settings;