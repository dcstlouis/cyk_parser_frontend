import React from "react";
import styled from 'styled-components';
// import variables from '../variables.js';

const OuterWrapper = styled.div`
  height: 100%;
  position: relative;
  border: 3px solid green;
`

const InnerWrapper = styled.div`
  margin: 0;
  position: absolute;
  top: 25%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
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
    // this.setState({value: event.target.value});
    event.preventDefault();
    console.log(this.state.value)
    this.props.handleInputSubmit(this.state.value);
  }

  render() {
    return (
      <OuterWrapper>
        <InnerWrapper>
          <form onSubmit={this.handleSubmit}>
            <label>
              Sentence:
                <input type="text"
                       value={this.state.value}
                       onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </InnerWrapper>
      </OuterWrapper>
    );
  }
}
