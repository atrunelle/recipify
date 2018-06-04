import React, { Component } from 'react';

class BarGraph extends Component {

  get classes () {
    return `bar-graph bar-graph--${this.props.label.toLowerCase()}`;
  }

  get width () {
    return `${this.percentage}%`;
  }
  render() {
    if (!this.props.percentage) return ('');

    return (
    <div
      style={{width : `${this.width}`}}
      className={this.classes}>
      <p>{this.props.label} {this.width}</p>
    </div>
    );
  }
}

export default BarGraph;