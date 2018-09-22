<template>
  <div>
    {{msg}}
    <MyCounter />
    <TodoItem />
  </div>
</template>

<script>
  import MyCounter from './components/MyCounter';
  import TodoItem from './components/TodoItem';

  export default {
    name: 'App',
    data() {
      return {
        msg: 'hello vue!'
      }
    },
    components: {
      MyCounter, TodoItem
    }
  }
</script>

<style>

</style>

