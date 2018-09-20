<template>
  <div>
    {{msg}}
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar" exact>Go to Bar</router-link>
      <router-link to="/user/1">Go to User1</router-link>
      <router-link to="/user/2">Go to User2</router-link>
    </p>
    <div classs="router-render-area">
      <h4>渲染区域</h4>
      <router-view></router-view>
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
  .router-render-area {
    border: 1px solid #333;
  }
</style>

