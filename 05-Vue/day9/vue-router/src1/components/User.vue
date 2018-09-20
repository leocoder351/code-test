<template>
  <div>
    <h3>User {{ $route.params.id }}</h3>
    <router-link :to="$route.params.id + '/personal'">User Personal</router-link>
    <router-view></router-view>
  </div>  
</template>

<script>
  export default {
    watch: {
      '$route': function(newValue, oldValue) {
        let to = newValue.path;
        let from = oldValue.path;

        console.warn('watch $route')
        console.log('to', to);
        console.log('from', from);

        // 对路由变化做出响应....
      }
    },

    beforeRouteUpdate(to, from, next) {
      next();
      console.warn('beforeRouteUpdate')
      console.log('to', to);
      console.log('from', from);
      console.log('next', next);
    },

    created() {
      console.warn('Component User created');
    },

    updated() {
      console.warn('Component User updated');
    }
  }
</script>

<style>

</style>
