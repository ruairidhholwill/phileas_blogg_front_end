import React from 'react';
import {Link} from 'react-router-dom';
import './Main.css'

const NavBar = () =>(
<div className="nav-bar">
  <ul>
    <li><Link className="nav-link" to="/add-review"> +Review</Link></li>
    <li><Link className="nav-link" to="/add-user">+User</Link></li>
  </ul>
</div>
)

export default NavBar;
