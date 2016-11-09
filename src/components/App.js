import React, { Component } from 'react';
import Landing from './Landing';
import '../../public/usptostrap/css/usptostrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<h2 className="text-center">DALC Redux Starter</h2>
				<Landing />
      </div>
    );
  }
}

export default App;
