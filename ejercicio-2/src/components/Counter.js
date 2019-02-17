import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
    }
    render() {
        return (
        <div className="wrapper" >
        <span className="number">{this.props.number}</span>
        <button onClick= {this.props.SheepCounter}>
            Give me one more sheep! 
        </button>
        <img src={this.props.img}/>
        </div>
    );
}
}

export default Counter;