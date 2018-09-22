<template>
  <div>
    计数：{{count}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  export default {
    // state
    data() {
      return {

      }
    },
    created() {
      console.log(this)
      console.log(this.$store)
    },
    computed: {
      count() {
        return this.$store.state.count;
      }
    },
    // actions
    methods: {
      increment() {
        // this.$store.commit('increment');
        this.$store.dispatch('asyncIncrement');
      },
      decrement() {
        this.$store.dispatch('asyncDecrement', 2);
      }
    }
  }
</script>

<style>

</style>

