import React from 'react';
import {Link} from 'react-router-dom';
import './Main.css'

const NavBar = () =>(
  <ul className="nav-bar">
    {/* <li><Link className="nav-link" to="/">Home</Link></li> */}
    <li><Link className="nav-link" to="/add-review"> +Review</Link></li>
  </ul>
)

export default NavBar;
