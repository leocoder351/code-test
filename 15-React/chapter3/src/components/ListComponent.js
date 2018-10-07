import React, { Component } from 'react';

class ListComponent extends Component {
  render() {
    return [
      <li key="1">First Item</li>,
      <li key="2">Second Item</li>,
      <li key="3">Third Item</li>
    ]
  }
}

export default ListComponent;