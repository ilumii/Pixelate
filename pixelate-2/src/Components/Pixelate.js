import React, { Component } from 'react';
import Header from './Header';
import Buttons from './Buttons';
import './Pixelate.css';

class Pixelate extends Component {
  render() {
    return (
      <div id="pixelate">
        <Header ></Header>
        <Buttons ></Buttons>
      </div>
    );
  }
}

export default Pixelate;
