<template>
  <div>
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/list">列表页</router-link>
    <router-view></router-view> -->
    {{msg}}
    <button @click="showNotify">弹框</button>
  </div>
</template>

<script>
  export default {
    data() { 
      return {msg: 'hello world'}
    },
    methods: {
      showNotify() {
        this.$notify('修改弹框内容', {delay: 500});
      }
    }
  }
</script>

<style scoped>

</style>
