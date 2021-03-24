import React, { Component } from 'react'
import "./App.css";
import Main from './components/Main';
import Navbar from "./components/Navbar";

  class App extends Component {
  render() {
    return (
      <div className="App-header">
       <div className="container">
          <div className="row">
            <div className="col">
              <Navbar title="Navbar App"></Navbar>
            </div>
            <div className="col">
              <Main
              name="merve"
              age="22"
              school="İU-Cerrahpaşa"></Main>
            </div>
            <div className="col">
            <Navbar title="Navbar App2"></Navbar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;