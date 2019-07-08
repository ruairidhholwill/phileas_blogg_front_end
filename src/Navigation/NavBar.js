import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>(
  <ul className="nav-bar">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/users">Users</Link></li>
    <li><Link to="/countries">Countries</Link></li>
    <li><Link to="/add-review">Reviews</Link></li>
  </ul>
)

export default NavBar;
