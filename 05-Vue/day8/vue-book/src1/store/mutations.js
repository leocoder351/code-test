import * as Types from './mutationsType';

const mutations = {
  // state是自动放入的，默认指的就是当前的state
  [Types.INCREASEMENT](state, step) {
    if (isNaN(Number(step))) return ;
    state.count += step;
  },
  [Types.DECREASEMENT](state) {
    state.count -= 1;
  }
};

export default mutations;