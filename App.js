import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/posts';
import Postform from './components/postform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Tester</h1>
        </header>
        <Postform/>
        <Posts/>
      </div>
    );
  }
}

export default App;
