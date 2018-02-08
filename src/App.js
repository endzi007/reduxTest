import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/appStore';
import * as actions from './actions/testActions';
class App extends Component {
  clickHandler(){
    console.log("click handler");
    store.dispatch(actions.testAction());
    console.log(store.getState());
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.clickHandler.bind(this)}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
