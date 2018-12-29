import React, { Component } from "react";
import styled from 'styled-components';

const ScrollingDiv = styled.div`
  background: #F3EED6;
  border-radius: 10px;
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 20px;
  margin-top: 5%;
  padding: 5px;
  position: relative;
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll;
  max-height: 60vh;
`


export default class Grammar extends Component {
  constructor(props) {
    super(props);
    this.drawGrammar = this.drawGrammar.bind(this);
    this.state = { grammar: this.props.grammar }
  }

  drawGrammar(grammar) {
    const drawProductions = grammar.map((line) =>
      <div key={line.toString()}>
        {line[0]} &#8594; {line[1]}
      </div>
    );
    return (
      <ScrollingDiv>{drawProductions}</ScrollingDiv>
    );
  }

  render() {
    const grammar = this.props.grammar;
    return (
        this.drawGrammar(grammar)
    );
  }
}
