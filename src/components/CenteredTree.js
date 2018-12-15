import React from "react";
import Tree from "react-d3-tree";

import variables from '../variables.js';

// CenteredTree component from https://codesandbox.io/s/vvz51w5n63 via
// https://www.npmjs.com/package/react-d3-tree#auto-centering-inside-treecontainer

const containerStyles = {
  width: '100%',
  height: '100vh',
}

export default class CenteredTree extends React.PureComponent {
  state = {
    isLoading: true,
    tree: [{name: "oops", children: [{name: "didn't work"}]}]
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

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.fetchData()
    this.setState({
      translate: {
        x: dimensions.width / 3,
        y: dimensions.height / 5
      }
    });
  }

  render() {
    const tree = this.state.tree;
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          collapsible={false}
          data={tree}
          translate={this.state.translate}
          orientation={'vertical'}
        />
      </div>
    );
  }
}
