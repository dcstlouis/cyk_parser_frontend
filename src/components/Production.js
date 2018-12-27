import React, { Component } from "react";
import styled from 'styled-components';


export default class Production extends Component {
  constructor(props) {
    super(props);
    this.state = {'left': this.props.left, 'right': this.props.right}
  }

  render() {
    // display production with arrow
    return (
      <div>
        {this.state.left} &#8594; {this.state.right}
      </div>
    )
  }

}
