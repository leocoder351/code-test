<template>
  <div>
    {{msg}}
    <p>
      <router-link to="/">首页</router-link>
      <router-link to="/user/1">用户1</router-link>
      <router-link to="/user/2">用户2</router-link>
    </p>
    <div classs="router-render-area">
      <h4>渲染区域</h4>
      <router-view></router-view>
      <router-view name="sidebar" class=".sidebar"></router-view>
      <router-view name="main" class=".main"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        msg: 'hello vue!'
      }
    },
    components: {

    }
  }
</script>

<style>

</style>

