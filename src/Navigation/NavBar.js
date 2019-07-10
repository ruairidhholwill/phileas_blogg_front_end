import React,  { Component } from 'react';
import {Link} from 'react-router-dom';

import './Main.css';


class NavBar extends Component{
  render(){
  return(
  <div>
  <Link to="/"> <img alt="balloon" id="logo" src="/images/balloon.png"></img></Link>
  <ul>
    <li><Link className="nav-link" to="/add-review"> +Review</Link></li>
    <li><Link className="nav-link" to="/add-user">+User</Link></li>
  </ul>


  </div>
)
}
}

export default NavBar;
