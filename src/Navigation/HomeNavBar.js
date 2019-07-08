import React from 'react';
import {Link} from 'react-router-dom';
import './Main.css'

const HomeNavBar = () =>(
  <ul className="home-nav-bar">
    <li><Link className="nav-link" to="/users">Users</Link></li>
    <li><Link className="nav-link" to="/countries">Countries</Link></li>
  </ul>
)

export default HomeNavBar;