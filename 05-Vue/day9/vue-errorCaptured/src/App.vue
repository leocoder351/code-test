<template>
  <div>
    {{msg}}
    <Child />
  </div>
</template>

<script>
  import Child from './components/Child.vue';

  export default {
    name: 'App',
    data() {
      return {
        msg: 'hello vue'
      }
    },
    errorCaptured(err, vm, info) {
      console.warn('App.vue errorCaptured');
      console.log(err);
      console.log(vm);
      console.log(info);
      c.d = 4;
      // return false;
    },
    components: {
      Child
    }
  }
</script>

<style>

</style>

