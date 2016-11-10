import React, { Component } from 'react';
import Counter from './Counter';
import '../../public/usptostrap/css/usptostrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Counter />
      </div>
    );
  }
}

export default App;
