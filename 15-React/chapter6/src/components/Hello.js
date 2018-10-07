import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      count: 0
    };

    this.updateDate = this.updateDate.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.updateDate, 1000);

    this.setState({
      count: this.state.count + 1
    })

    this.setState({
      count: this.state.count + 1
    })

    setTimeout(() => {
      console.log('count', this.state.count);
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  

  updateDate() {
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h3>{this.state.date.toLocaleString()}</h3>
      </div>
    )
  }
}

export default Hello;