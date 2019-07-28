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
    if(this.state.column === 0 && this.state.row > 0){
      let temp = this.state.column+2;
      this.setState({
        column: temp
      })
    }
    else{
      let temp = this.state.column+1;
      this.setState({
        column: temp
      })
    }
  }

  addRow = () =>{
    if(this.state.column >0 && this.state.row === 0){
      let temp = this.state.row+2;
      this.setState({
        row: temp
      })
    }
    else{
      let temp = this.state.row+1;
      this.setState({
        row: temp
      })
    }
  }

  removeColumn = () =>{
    if(this.state.column <= 1){
      this.setState({
        column:0,
        row:0
      })
    }
    else{
      let temp = this.state.column-1;
      this.setState({
        column: temp
      })
    }
  }

  removeRow = () =>{
    if(this.state.row <= 1){
      this.setState({
        column:0,
        row:0
      })
    }
    else{
      let temp = this.state.row-1;
      this.setState({
        row: temp
      })
    }
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
