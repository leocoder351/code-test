<template>
  <div class="foo">
    <h1>Foo</h1>
    <p>Component</p>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log('Foo.vue beforeCreate')
  },

  created() {
    console.log('Foo.vue created')
  },

  beforeMount() {
    console.log('Foo.vue beforeMount')
  },

  mounted() {
    console.log('Foo.vue mounted')
  }
}
</script>

<style>
.foo {
  background: yellowgreen;
}
</style>
