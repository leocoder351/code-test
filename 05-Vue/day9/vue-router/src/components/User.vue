<template>
  <div>
    <h3>User {{id}}</h3>
    {{name}}
  </div>  
</template>

<script>
  export default {
    props: ['id', 'name']
  }
</script>

<style>

</style>
