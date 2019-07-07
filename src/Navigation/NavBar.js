import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>(
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/users">Users</Link></li>
    <li><Link to="/add-review">Reviews</Link></li>
  </ul>
)

export default NavBar;
