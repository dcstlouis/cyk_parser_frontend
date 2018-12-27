import React from "react";
import styled from 'styled-components';

import Button from './Button.js';

const OuterWrapper = styled.div`
  // border: 3px solid green;
  height: 100%;
  position: relative;
`

const InnerWrapper = styled.div`
  margin: 0;
  position: relative;
  padding: 5%;
  top: 10%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

const Input = styled.input`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(174, 174, 174);
  border-radius: 10px;
  color: rgb(162, 162, 162);
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 20px;
  font-weight: normal;
  height: 30px;
  line-height: 15px;
  outline: none;
  padding: 10px;
  width: 90%;
`

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleInputSubmit(this.state.value);
  }

  render() {
    return (
      <OuterWrapper>
        <InnerWrapper>
          <form onSubmit={this.handleSubmit}>
            <label>
                <Input type="text"
                       value={this.state.value}
                       onChange={this.handleChange}
                       placeholder="Enter a sentence to parse"/>
            </label>
            <Button type="submit" value="Submit" />
          </form>
        </InnerWrapper>
      </OuterWrapper>
    );
  }
}
