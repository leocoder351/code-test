import React, { Component } from 'react';

function withRedBackground(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <div style={{backgroundColor: 'red'}}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}