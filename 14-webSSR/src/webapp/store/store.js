import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters'

// Vue.use(Vuex);

// 定义初始化的 state

const defaultState = {
  count: 0,
  topics: []
};

// 判断当前的开发环境

const isBrowser = typeof window !== undefined;

// if (!isBrowser || process.env.NODE_ENV === 'development') {
  // node 里肯定需要 use
  Vue.use(Vuex);
// }

// ssr 一定要知道前端的哪些请求是异步的 后端先把异步的请求执行完
let state = (isBrowser && window.__INITIAL_STATE__) || defaultState;

// 定义 mutations
const mutations = {
  INCREMENT: (state) => ++state.count,
  DECREMENT: (state) => --state.count,
  TOPICS_LIST: (state, topics) => {
    console.log(343434);
    console.log(topics);
    state.topics = topics;
  }
};

export function createStore() {
  const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
  });

  return store;
}