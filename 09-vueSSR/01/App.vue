<template>
  <div>
    <Foo></Foo>
    <Bar></Bar>
  </div>
</template>

<script>
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';

export default {
  components: {
    Foo, Bar
  },

  beforeCreate() {
    console.log('App.vue beforeCreate')
  },

  created() {
    console.log('App.vue created')
  },

  beforeMount() {
    console.log('App.vue beforeMount')
  },

  mounted() {
    console.log('App.vue mounted')
  }
}
</script>

