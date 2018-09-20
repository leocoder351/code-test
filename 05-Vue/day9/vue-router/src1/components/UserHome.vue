<template>
  <div>
    <h5>用户首页</h5>
    <button @click="jump">跳转路由</button>
  </div>  
</template>

<script>
  export default {
    methods: {
      jump() {
        // 会把当前路由的最后一级进行替换，如果时空字符串，则不做操作

        // 字符串
        // this.$router.push('/home')

        // 对象
        // this.$router.push({ path: 'personal' })

        // // 命名的路由
        // 注意：如果提供了 path，params 会被忽略
        // 想要使用params，必须使用有name的路由
        // this.$router.push({ path: '/user', params: { id: 32123 }})
        this.$router.push({ name: 'user', params: { id: 32123 }})

        // // 带查询参数，变成 /register?plan=private
        // this.$router.push({ path: '/user', query: { plan: 'private' }})
      }
    }
  }
</script>

<style>

</style>
