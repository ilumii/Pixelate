import React, { Component } from 'react';
import Pixelate from './Components/Pixelate';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      column: 0,
      row: 0
    }
  }

  addColumn = () =>{
    let temp = this.state.column+1;
    this.setState({
      column: temp
    })
  }

  addRow = () =>{
    
    console.log(this.state.row)
    let temp = this.state.row+1;
    this.setState({
      row: temp
    })
  }

  removeColumn = () =>{
    let temp = this.state.column-1;
    this.setState({
      column: temp
    })
  }

  removeRow = () =>{
    let temp = this.state.row-1;
    this.setState({
      row: temp
    })
  }

  render() {
    return (
      <div className="center">
        <Pixelate 
        row={this.state.row} 
        addRow={()=>this.addRow()} 
        removeRow={()=>this.removeRow()}
        column={this.state.column} 
        addColumn={()=>this.addColumn()}
        removeColumn={()=>this.removeColumn()}
        />
      </div>
    );
  }
}

export default App;
