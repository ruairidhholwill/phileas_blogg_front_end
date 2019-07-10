import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Main.css'
import './searchBar.css'

class HomeNavBar extends Component{
  render(){
    return(
  <ul className="home-nav-bar">
    <li><Link className="main-nav-list-item" to="/users">Users</Link></li>
    <li><Link className="main-nav-list-item" to="/reviews">Reviews</Link></li>
    <input id="search-bar" type="input" placeholder="Search..." onChange={this.props.handleSearchChange}></input>
  </ul>

)}}

export default HomeNavBar;
