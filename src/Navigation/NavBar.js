import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (

  <Fragment>
    <ul className="nav-bar">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/countries">Countries</Link></li>
      <p><Link to="/reviews">Reviews</Link></p>

    </ul>
    <p><Link to="/add-review">Add Review</Link></p>
  </Fragment>
)

export default NavBar;
