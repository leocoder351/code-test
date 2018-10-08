import request from 'axios';

request.defaults.baseURL = 'http://localhost:8081';
export const getTopics = ({ commit, state }) => {
  return request.get('users/123').then((res) => {
    console.log(9999);
    console.log(res)
    if (res.status === 200) {
      commit('TOPICS_LIST', res.data.data);
    }
  })
}

export const increment = ({ commit }) => commit('INCREMENT');
export const decrement = ({ commit }) => commit('DECREMENT');