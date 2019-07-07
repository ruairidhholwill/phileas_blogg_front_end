import React,{Component, Fragment} from 'react';
import CountryContainer from './Countries/Containers/CountryContainer'
import './App.css';
import Main from "./Navigation/Main";


class App extends Component{
  render(){
    return  (
      <Fragment>
        <Main/>
        <CountryContainer/>
      </Fragment>
    )
}



}




export default App;
