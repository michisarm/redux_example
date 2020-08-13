import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import ToastContainer from './components/ToastContainer';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">ToDo App in ReactJS</h1>
        <Todos />
        <ToastContainer value="환영합니다."/>
      </div>
    );
  }
}

export default App;