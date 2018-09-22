<template>
  <div>
    <Counter></Counter>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  export default {
    data() {
      return {
        msg: 'hello'    
      }
    },
    components: {
      Counter
    }
  }  
</script>

<style>

</style>
