import React, { Component } from 'react';
import MyRoutes from './pages/routes'
import { BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    );
  }
}

export default App;
