import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
# leanpub-start-insert
    var helloWord = "리엑트의 세계에 오신걸 환영합니다.";
# leanpub-end-insert
    return (
      <div className="App">
        <h2>리액트의 세계에 오신걸 환영합니다 :)</h2>
      </div>
    );
  }
}

export default App;
