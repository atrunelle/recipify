import React, { Component } from 'react';
import './CircleIcon.css';

class CircleIcon extends Component {
  render() {
    return (
      <div className="circle-icon">
        <img 
          className="circle-icon__icon"
          src={this.props.icon}
          alt={this.props.alt}/>
      </div>
    );
  }
}

export default CircleIcon;