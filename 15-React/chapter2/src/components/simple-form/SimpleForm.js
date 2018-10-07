import React, { Component } from 'react';

class SimpleForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.input);
    alert('The title you submitted was ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          title: 
          {/* this.inpput 指向当前 input 元素 */}
          <input type="text" defaultValue="something" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default SimpleForm;