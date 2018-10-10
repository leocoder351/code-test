<template>
  <div class="bar">
    <h1>Bar</h1>
    <p>Component</p>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log('Bar.vue beforeCreate')
  },

  created() {
    console.log('Bar.vue created')
  },

  beforeMount() {
    console.log('Bar.vue beforeMount')
  },

  mounted() {
    console.log('Bar.vue mounted')
  }
}
</script>

<style>
.bar {
  background: blue;
}
</style>
