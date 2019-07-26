import React, { Component } from 'react';

class Buttons extends Component{
    constructor(props){
        super(props)
        this.state = {
            color: ""
        }
        this.handleChange = this.handleChange.bind(this)
      }

     handleChange(){
        this.setState({
            color: document.querySelector('#colorpick').value
        })
      }

    render(){
        return(
            <div>
                <button onClick={()=>this.props.addRow()}> Add Rows </button>
                <button onClick={()=>this.props.addColumn()}> Add Columns </button>
                <button onClick={()=>this.props.removeRow()}> Remove Rows </button>
                <button onClick={()=>this.props.removeColumn()}> Remove Columns </button>
                <select id="colorpick" onChange={this.handleChange}>
                    <option value=""> Select </option>
                    <option value="red"> Red </option>
                    <option value="blue"> Blue</option>
                    <option value="green"> Green </option>
                </select>
            </div>
        );
    }
}

export default Buttons;