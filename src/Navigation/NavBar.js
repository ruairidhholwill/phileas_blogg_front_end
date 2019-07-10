import React,  { Component } from 'react';
import {Link} from 'react-router-dom';

import './Main.css';
import './searchBar.css';

class NavBar extends Component{
  render(){
  return(
  <div>
  <Link to="/"> <img alt="balloon" id="logo" src="/images/balloon.png"></img></Link>
  <ul className="nav-bar">
    <li><Link className="nav-link" to="/add-review"> +Review</Link></li>
    <li><Link className="nav-link" to="/add-user">+User</Link></li>
    <input className="search-bar" type="input" placeholder="Search..." onChange={this.props.handleSearchChange}></input>

  </ul>
  </div>
)
}
}

export default NavBar;
