import React, {Fragment, Component} from 'react';
import './App.css';
import ReviewBox from "./Reviews/Containers/ReviewBox";
import CityContainer from './Cities/Containers/CityContainer';

class App extends Component{
  render(){
    return <Fragment>
      <ReviewBox/>
      <CityContainer/>
    </Fragment>
  }
}

export default App;
