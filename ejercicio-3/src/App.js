import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import oveja from './images/sheep.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      number: 0,
    }
    this.SheepCounter = this.SheepCounter.bind(this) 
}

SheepCounter(){
    this.setState({
    number: this.state.number +1
    })
}
  render() {
    return (
      <div className="App">
        <Counter
          number={this.state.number}
          SheepCounter= {this.SheepCounter}
          img = {oveja}
        />
      </div>
    );
  }
}

export default App;