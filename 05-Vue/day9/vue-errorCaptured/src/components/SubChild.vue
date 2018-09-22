<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'sub-child'
      }
    },
    mounted() {
      a.b = 3;
    }
  }
</script>

<style>

</style>

