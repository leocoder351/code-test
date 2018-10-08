import React, { Component } from 'react';
import './PostList.css';
import PostItem from '../post-item/PostItem';
import Welcome from '../welcome/Welcome';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      a: 2
    };

    this.timer = null;
    this.handleVote = this.handleVote.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    console.log('this', this);

    // setTimeout 模拟从服务端获取数据
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          { id: 1, title: '大家一起来讨论React吧', author: '张三', date: '2017-09-01 10:00', vote: 0 },
          { id: 2, title: '前端框架，你最爱哪一个', author: '李四', date: '2017-09-01 12:00', vote: 0 },
          { id: 3, title: 'Web App的时代已经到来', author: '王五', date: '2017-09-01 14:00', vote: 0 }
        ]
      })
    }, 1000);
  }
  
  componentWillUnmount() {
    // 组件卸载时移除 timer 防止内存泄露
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  
  handleVote(id) {
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
      return newItem;
    });

    this.setState({
      posts: posts
    });
  }

  handleSave(post) {
    // 根据 post 的 id，过滤出当前要更新的 post
    const posts = this.state.posts.map(item => {
      const newItem = item.id === post.id ? post : item;
      return newItem;
    });
    
    this.setState({
      posts: posts
    });
  }

  render() {
    return (
      <div className="PostList">
        <Welcome />
        帖子列表：
        <ul>
          {
            this.state.posts.map(item => {
              return (
                <PostItem 
                  key={item.id}
                  post={item}
                  onVote={this.handleVote}
                  onSave={this.handleSave}
                />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default PostList;