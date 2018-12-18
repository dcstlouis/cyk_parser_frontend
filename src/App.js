import React, { Component } from 'react';
import Container from './containers/Container';
import './App.css';

import styled from 'styled-components';

const Header = styled.header`
  border: 1px solid #212E8B;
  border-radius: 5px;
  height: 5vh;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>CYK Parse Tree</Header>
        <Container />
      </div>
    );
  }
}

export default App;
