import React from "react";
import styled from 'styled-components';

import Button from './Button.js';

const OuterWrapper = styled.div`
  height: 100%;
  position: relative;
`

const FormContainer = styled.div`
  max-height: 10vh;
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
  border: ${props => props.badData.error ? '1px solid #8A140E' : '1px solid #E0E8F0'};
  border-radius: 10px;
  color: rgb(162, 162, 162);
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 20px;
  font-weight: normal;
  height: 3vh;
  line-height: 15px;
  outline: none;
  padding: 10px;
  width: 90%;
`

const Label = styled.div`
  color: #8A140E;
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 1.25em;
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
            <FormContainer>
              {(this.props.badData.error) ?
                <Label>This sentence is not in the grammar.
                Please enter a sentence based on the grammar shown above.</Label> :
                <Label>&nbsp;</Label>}
                  <Input type="text"
                         value={this.state.value}
                         onChange={this.handleChange}
                         placeholder="Enter a sentence to parse"
                         badData={this.props.badData}/>
              <Button type="submit" value="Submit" />
            </FormContainer>
          </form>
        </InnerWrapper>
      </OuterWrapper>
    );
  }
}
