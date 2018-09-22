import axios from 'axios';

// 增加默认的请求路径
axios.defaults.baseURL = 'http://localhost:3001/vue-book';
// axios.defaults.baseURL = 'http://47.104.66.25/vue-book';

// 配置拦截器
axios.interceptors.response.use((res) => {
  return res.data;
});

// 获取轮播图数据，返回的是一个promise对象
export let getSliders = () => {
  return axios.get('/sliders');
};

// 获取热门图书
export let getHotBooks = () => {
  return axios.get('/hot');
};

// 获取全部图书
export let getAllBooks = () => {
  return axios.get('/book');
};

// 删除某一本图书
export let removeBook = (id) => {
  return axios.delete(`/book?id=${id}`);
};

// 获取某一本书
export let getOneBook = (id) => {
  return axios.get(`/book?id=${id}`);
};

// 更新某一本书
export let updateBook = (id, data) => {
  return axios.put(`/book?id=${id}`, data);
};

// 新增某一本书
export let addBook = (data) => {
  return axios.post(`/book`, data);
};

// 获取轮播图和热门图书
export let getAllHomeData = () => {
  return axios.all([getSliders(), getHotBooks()]);
};

// 分页获取图书列表
export let getBookListpagination = (offset, pageSize) => {
  return axios.get(`/page?offset=${offset}&pageSize=${pageSize}`);
};
