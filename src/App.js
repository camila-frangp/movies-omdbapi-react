import React, {Component} from 'react';
import Routes from './pages/routes'
import {BrowserRouter} from 'react-router-dom';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
