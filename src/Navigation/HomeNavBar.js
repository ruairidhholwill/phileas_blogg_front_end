import React from 'react';
import {Link} from 'react-router-dom';
import './Main.css'

const HomeNavBar = () =>(
  <ul className="home-nav-bar">
    <li><Link className="main-nav-list-item" to="/users">Users</Link></li>
    <li><Link className="main-nav-list-item" to="/reviews">Reviews</Link></li>
  </ul>
)

export default HomeNavBar;
