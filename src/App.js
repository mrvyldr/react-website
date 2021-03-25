import React, { Component } from 'react'
import "./App.css";
import Mains from './components/Mains';
import Navbar from "./components/Navbar";
import AddMain from "./components/AddMain";
import Test from './components/Test'

class App extends Component {

  render() {
    return (

      <div className="App-header">
       
        <Navbar title = "Application"></Navbar>
       <div className="container">
          <div className="row">
            <div className="col">
              <AddMain></AddMain>
          
            </div>
            <div className="col">
              <Mains></Mains>
            </div>
            <div className="col">
            <Navbar></Navbar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;