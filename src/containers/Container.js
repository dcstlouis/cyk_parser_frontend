import React, { Component } from 'react';
import styled from 'styled-components';

import CenteredTree from '../components/CenteredTree';
import Grammar from '../components/Grammar';
import InputForm from '../components/InputForm';

import variables from '../variables.js';

const Header = styled.header`
  background-color: #51A2D9;
  border: 1px solid #51A2D9;
  border-radius: 5px;
  height: 8vh;
`

const Logo = styled.div`
  color: #F3EED6;
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 1.5em;
  margin-left: 1%;
  padding: 2vh;
  text-align: justify;
  vertical-align: middle;
  width: 50%;
`

const RightPanel = styled.div`
  position: relative;
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
    this.fetchGrammarData = this.fetchGrammarData.bind(this);
    this.fetchTreeData = this.fetchTreeData.bind(this);
    this.updateTreeData = this.updateTreeData.bind(this);
    this.state = {
      tree: [{name: "Loading tree..."}],
      grammar: [],
      badData: {}
    }
  }

  fetchGrammarData() {
    fetch(variables.API_URL + '/grammar/')
    .then(response => response.json())
    .then(data =>
      this.setState({
        grammar: data.grammar,
      })
    )
    .catch(error => this.setState({ error }));
  }

  fetchTreeData() {
    fetch(variables.API_URL)
      .then(response => response.json())
      .then(data =>
        this.setState({
          tree: [data],
        })
      )
      .catch(error => this.setState({ error }));
  }

  updateTreeData(i) {
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
        data.error ?
        this.setState({badData: data}) :
        this.setState({tree: [data], badData: {}})
      )
      .catch(error => this.setState({ error }));
  }

  handleInputSubmit(value) {
    this.updateTreeData(value);
  }

  componentDidMount() {
    this.fetchGrammarData();
    this.fetchTreeData();
  }

  render() {
    return (
      <div>
        <Header><Logo>CYK Parser</Logo></Header>
        <Display>
          <CenteredTree tree={this.state.tree}/>
          <RightPanel>
            <Grammar grammar={this.state.grammar}/>
            <InputForm handleInputSubmit={this.handleInputSubmit}
                       badData={this.state.badData}/>
          </RightPanel>
        </Display>
      </div>
    );
  }
}
