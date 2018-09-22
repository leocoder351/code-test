<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-list"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-favor"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-roundadd"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Add'
      }
    },
    methods: {

    },
    computed: {

    },
    components: {

    }
  }
</script>

<!-- 
  display: flex
  flex-direction: row/ column
  justify-content: center 主轴居中
  align-item:center 副轴居中
  flex: 1 每份占1
-->

<style scoped lang="less">
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;

    a {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      color: darkviolet;
    }

    a.router-link-active {
      color: deeppink;
    }
  }
</style>
