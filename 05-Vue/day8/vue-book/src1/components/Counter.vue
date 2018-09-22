<template>
  <div>
    计数器：<button @click="sub">-</button>
    <br>
    当前：{{$store.state.count}}
    <br>
    计数器：<button @click="add">+</button>
    <br>
    {{$store.getters.val}}
  </div>
</template>

<script>
  import * as Types from '../store/mutationsType';

  export default {
    data() {
      return {
        msg: 'hello'    
      }
    },
    methods: {
      add() {
        // 提交add的mutation
        // 载荷payload
        console.log(this.$store)
        this.$store.commit(Types.INCREASEMENT,2);
      },
      sub() {
        this.$store.commit(Types.DECREASEMENT);
      }
    }
  }  
</script>

<style>

</style>
