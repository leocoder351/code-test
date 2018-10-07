const React = require('react');
const Store = require('./Store');

const store = new Store();

// Top level component, container and controller-view
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  add() {
    // 伪代码
    store.add(this.refs.nameInput.value);
  }

  componentDidMount() {
    store.on('change', list => {
      this.setState({list});
    });
  }

  render() {
    return (
      <ul>
        {this.props.listData.map(item => <li>{item}</li>)}
        <li>
          <input ref="nameInput" type="text"/>
          <button onClick={this.add.bind(this)}> add </button>
        </li>
      </ul>
    )
  }
}