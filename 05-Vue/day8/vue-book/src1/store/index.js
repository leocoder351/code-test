import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
import mutations from './mutations';

Vue.use(Vuex);

// 容器是唯一的
const state = {
  count: 0
};

const getters = {
  val(state) {
    return state.count % 2 ? '奇数' : '偶数';
  } 
};

const store = new Vuex.Store({
  strict: true,  // 只能通过mutation来更改状态，mutation不支持异步
  state,
  mutations,
  getters,
  plugins: [logger()]
});

export default store;