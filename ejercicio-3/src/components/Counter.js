import React, { Component } from 'react';

class Counter extends Component {

 paintSheep(numberOfSheeps){
    const sheeps=[];
    if(numberOfSheeps!==0){

      for(let i=0; i<numberOfSheeps; i++) {
        sheeps.push(<div className={i} ><img src={this.props.img} alt="sheep"/></div>);
      }     
    }
    return sheeps;
  }
  render() {
    return (
    <div className="wrapper" >
    <span className="number">{this.props.number}</span>
    <button onClick= {this.props.SheepCounter}>
      Give me one more sheep! 
    </button>
    {this.paintSheep(this.props.number)}

    </div>
  );
}
}

export default Counter;

// import React, { Component } from 'react';

// class Counter extends Component {
//     constructor(props) {
//         super();
//     }
//     render() {
//         return (
//         <div className="wrapper" >
//         <span className="number">{this.props.number}</span>
//         <button onClick= {this.props.SheepCounter}>
//             Give me one more sheep! 
//         </button>
//         <img src={this.props.img} alt="sheep"/>
//         </div>
//     );
// }
// }

// export default Counter;