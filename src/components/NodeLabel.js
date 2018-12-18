import React from "react";
import styled from 'styled-components';

const P = styled.p`
  font-size: 2em;
  text-align: left;
`

export default class NodeLabel extends React.PureComponent {
  render() {
    const {className, nodeData} = this.props
    return (
      <div className={className}>
        <P>{nodeData.name}</P>
      </div>
    )
  }
}
