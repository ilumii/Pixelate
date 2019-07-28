import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component{
    render(){
        return(
            <div id="buttons">
                <button onClick={()=>this.props.addRow()}> Add Rows </button>
                <button onClick={()=>this.props.addColumn()}> Add Columns </button>
                <button onClick={()=>this.props.removeRow()}> Remove Rows </button>
                <button onClick={()=>this.props.removeColumn()}> Remove Columns </button>
                <select>
                    <option> Red </option>
                    <option> Blue</option>
                    <option> Green </option>
                </select>
            </div>
        );
    }
}

export default Buttons;