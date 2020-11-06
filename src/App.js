import './App.css';
import React, { Component } from 'react';

import Mycars from './components/Mycars';

class App extends Component {
  state = {
    titre: 'Mon Catalogue voitures'
  }
  render(){
    return (
      <div className="App">
        <Mycars title={this.state.titre} />
      </div>
    );
  }
}

export default App;
