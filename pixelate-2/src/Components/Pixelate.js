import React, { Component } from 'react';
import Header from './Header';
import Buttons from './Buttons';
import './Pixelate.css';

class Pixelate extends Component {
  display = () =>{
    console.log(this.props)
    let table = []
    if(this.props.column > 0 && this.props.row ===0){
      let children=[]
      for(let i = 0; i<this.props.column;i++){
        children.push(<td>{}</td>)
      }
      table.push(<tr>{children}</tr>)
    }
    else if(this.props.column === 0 && this.props.row >0){
      for(let i = 0; i<this.props.row;i++){
        table.push(<tr>{<td>{}</td>}</tr>)
      }
    }
    else{
      for (let i = 0; i < this.props.row; i++) {
        let children = []
        for (let j = 0; j < this.props.column; j++) {
          children.push(<td>{}</td>)
        }
        table.push(<tr>{children}</tr>)
      }
    }
    return table
  }

  render() {
    return (
      <div>
        <Header ></Header>
        <Buttons 
        addRow={()=>this.props.addRow()}  
        removeRow={()=>this.props.removeRow()}
        addColumn={()=>this.props.addColumn()}
        removeColumn={()=>this.props.removeColumn()}
        />
        <div className="table">
          {this.display()}
        </div>
      </div>
    );
  }
}

export default Pixelate;
