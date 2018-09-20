import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    todoItems: [
      {
        todo: '做数学作业',
        isFinished: false
      },
      {
        todo: '睡觉',
        isFinished: true
      }
    ]
  },
  getters: {
    doneTodoItemsCount: (state) => {
      return state.todoItems.filter((todo) => todo.isFinished).length;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },

    decrement(state, amount) {
      state.count -= amount;
    },

    addTodoItem(state, todoItem) {
      state.todoItems.push(todoItem);
    }
  },
  actions: {
    // action主要是为了做异步操作，dispatch()返回一个promise
    asyncIncrement(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 1000);
      // context.commit('increment');    // 这样写和在组件中直接commit('increment')一个效果
    },
    asyncDecrement(context, amount) {
      setTimeout(() => {
        context.commit('decrement', amount);
      }, 1000);
    }  
  }
});

export default store;