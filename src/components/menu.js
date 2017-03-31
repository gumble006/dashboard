import React from 'react';
import { Link } from 'react-router';

const Menu = () => {
  return (
    <div className="Menu text-center">
      <div className="list-group">
        <Link className="list-group-item" to="/home">
          <i className="fa fa-tachometer align-middle" aria-hidden="true" />
          Dashboard
        </Link>
        <Link className="list-group-item" to="/home/channels">
          <i className="fa fa-random align-middle" aria-hidden="true" />
          Channels
        </Link>
        <Link className="list-group-item" to="/home/maps">
          <i className="fa fa-globe align-middle" aria-hidden="true" />
          Maps
        </Link>
        <Link className="list-group-item" to="/home/settings">
          <i className="fa fa-cog align-middle" aria-hidden="true" />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Menu;