import React from "react";
import Tree from "react-d3-tree";

import NodeLabel from './NodeLabel.js';

// CenteredTree component from https://codesandbox.io/s/vvz51w5n63 via
// https://www.npmjs.com/package/react-d3-tree#auto-centering-inside-treecontainer

const containerStyles = {
  'width': '75vw',
  'height': '80vh',
}

export default class CenteredTree extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { tree: this.props.tree }
  }

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    const zoom = dimensions.height / dimensions.width;
    this.setState({
      zoom: zoom,
      translate: {
        x: dimensions.width / 6,
        y: dimensions.height / 10,
      }
    });
  }

  render() {
    const tree = this.props.tree;
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          collapsible={false}
          data={tree}
          translate={this.state.translate}
          orientation={'vertical'}
          zoom={this.state.zoom}
          allowForeignObjects
          nodeLabelComponent={{
            render: <NodeLabel className='myLabelComponentInSvg' />,
            foreignObjectWrapper: {
              height: 100,
              x: 20,
              y: -50,
            }
          }}
        />
      </div>
    );
  }
}
