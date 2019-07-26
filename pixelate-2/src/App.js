import React, { Component } from 'react';
import Pixelate from './Components/Pixelate.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      column: 0,
    }
  }

  addColumn = () =>{
    let temp = this.state.column +1
    this.setState({
      column: temp
    })
  }

  render() {
    return (
      <div className="center">
        <button onClick={()=>this.addColumn()}>Try me</button>
        
      </div>
    );
  }
}

export default App;
