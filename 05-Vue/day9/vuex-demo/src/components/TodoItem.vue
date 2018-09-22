<template>
  <div>
    <ul>
      <li v-for="(item, index) in todoItems" :key="index">
        <input type="checkbox" v-model="item.isFinished">
        {{item.todo}} - {{item.isFinished ? '已完成' : '未完成'}}
      </li>
    </ul>
    <input type="text" v-model="todo">
    <button @click="addTodoItem">添加</button>

    <h3>已完成：{{doneTodoItemsCount}} 件</h3>
  </div>
</template>

<script>
  export default {
    // state
    data() {
      return {
        todo: ''
      }
    },
    created() {
      console.log(this)
      console.log(this.$store)
    },
    computed: {
      todoItems() {
        return this.$store.state.todoItems;
      },

      doneTodoItemsCount() {
        return this.$store.getters.doneTodoItemsCount
      }
    },
    // actions
    methods: {
      addTodoItem() {
        let todoItem = {
          todo: this.todo,
          isFinished: false
        };

        this.$store.commit('addTodoItem', todoItem);
      }
    }
  }
</script>

<style>

</style>

