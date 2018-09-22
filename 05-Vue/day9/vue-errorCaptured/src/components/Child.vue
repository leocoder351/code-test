<template>
  <div>
    {{msg}}
    <SubChild />
  </div>
</template>

<script>
  import SubChild from './SubChild.vue';

  export default {
    data() {
      return {
        msg: 'child'
      }
    },
    errorCaptured(err, vm, info) {
      console.warn('Child.vue errorCaptured');
      console.log(err);
      console.log(vm);
      console.log(info);
      return false;
    },
    created() {
      b.c = 3;
    },
    components: {
      SubChild
    }
  }
</script>

<style>

</style>

