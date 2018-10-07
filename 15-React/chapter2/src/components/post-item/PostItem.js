import React, { Component } from 'react';
import PropTypes from 'prop-types';
import thumb from '../../images/thumbs-up-2-512.png';

class PostItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      post: props.post
    };

    this.handleVote = this.handleVote.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post !== nextProps.post) {
      this.setState({
        post: nextProps.post
      });
    }
  }

  // 处理点赞事件
  handleVote() {
    this.props.onVote(this.props.post.id);
  }

  // 保存/编辑按钮点击后的逻辑
  handleEditPost() {
    const editing = this.state.editing;

    // 当前处于编辑状态，调用父组件传递的 onSave 方法保存帖子
    if (editing) {
      this.props.onSave({
        ...this.state.post,
        date: this.getFormatDate()
      })
    }

    this.setState({
      editing: !editing
    });
  }

  // 处理标题 textarea 值得变化
  handleTitleChange(event) {
    const newPost = {
      ...this.state.post,
      title: event.target.value
    };

    this.setState({
      post: newPost
    });
  }

  // 格式化时间
  getFormatDate() {
    return new Date().toLocaleString();
  }

  render() {
    const { post } = this.state;

    return (
      <li>
        <div>
          {
            this.state.editing ?
            <textarea value={post.title} onChange={this.handleTitleChange}></textarea> :
            post.title
          }
        </div>
        <div>创建人： <span>{post.author}</span></div>
        <div>创建时间： <span>{post.date}</span></div>
        <div>
          <span><img src={thumb} style={{ width: '20px', cursor: 'pointer' }} alt="thumb" onClick={this.handleVote} /></span>
          &nbsp;
        <span>{post.vote}</span>
        </div>
        <div>
          <button onClick={this.handleEditPost}>
            {this.state.editing ? '保存' : '编辑'}
          </button>
        </div>
      </li>
    )
  }
}



// 类型验证
// PostItem.propTypes = {
//   post: PropTypes.shape({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     author: PropTypes.string,
//     date: PropTypes.string,
//     vote: PropTypes.number
//   }).isRequired,
//   onVote: PropTypes.func
// };

export default PostItem;