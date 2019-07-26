import React, { Component } from 'react';

class Buttons extends Component{
    render(){
        return(
            <div>
                <button> Add Rows </button>
                <button> Add Columns </button>
                <button> Remove Rows </button>
                <button> Remove Columns </button>
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