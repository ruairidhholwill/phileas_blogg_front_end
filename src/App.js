import React, {Fragment, Component} from 'react';
import './App.css';
import ReviewBox from "./Reviews/Containers/ReviewBox";
import CityContainer from './Cities/Containers/CityContainer';
import UserBox from './Users/Containers/UserBox';

class App extends Component{
  render(){
    return <Fragment>
      <UserBox />
      <ReviewBox/>
      <CityContainer/>
    </Fragment>
  }
}

export default App;
