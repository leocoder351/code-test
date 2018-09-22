<template>
  <div class="header">
    <slot></slot>
    <i class="iconfont icon-pullleft" v-if="back" @click="onBack"></i>
  </div>
</template>

<script>
  export default {
    props: {
      back: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        msg: 'Add'
      }
    },
    methods: {
      onBack() {
        this.$router.go(-1);
      }
    },
    computed: {

    },
    components: {

    }
  }
</script>

<style scoped lang="less">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #afd9ee;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: bold;

    i {
      position: absolute;
      left: 10px;
      font-size: 20px;
    }
}
</style>
