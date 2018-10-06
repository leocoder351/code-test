<template>
  <div id="app">
    <h1>vue-ssr</h1>
    <router-link class="link" to="/comp1">组件1</router-link>
    <router-link class="link" to="/comp2">组件2</router-link>
    <router-view class="view"></router-view>
  </div>
</template>

<style scoped>
  .link {
    margin: 10px;
  }
</style>
