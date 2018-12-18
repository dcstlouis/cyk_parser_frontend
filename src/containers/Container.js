import React, { Component } from 'react';
import CenteredTree from '../components/CenteredTree';
import InputForm from '../components/InputForm';

import styled from 'styled-components';

import variables from '../variables.js';

const Options = styled.div`
  width: 25vw;
`

const Display = styled.div`
  display: flex;
  flex-direction: row;
`

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.state = {tree: [{name: "oops", children: [{name: "didn't work"}]}]}
  }

  fetchData() {
    fetch(variables.API_URL)
      .then(response => response.json())
      .then(data =>
        this.setState({
          tree: [data],
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  updateData(i) {
    fetch(variables.API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: `${i}`
      })
    })
    .then(response => response.json())
    .then(data =>
        this.setState({
          tree: [data]
        })
      )
      .catch(error => this.setState({ error }));
  }

  handleInputSubmit(value) {
    this.updateData(value);
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <Display>
          <CenteredTree tree={this.state.tree}/>
          <Options>
            <InputForm handleInputSubmit={this.handleInputSubmit}/>
          </Options>
        </Display>
      </div>
    );
  }
}
