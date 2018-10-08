<style src="./Test.css"></style>

<template>
  <div class="test">
    Test Component
  </div>
</template>

<script>
export default {
  mounted() {
    import('./Test.js').then((res) => {
      console.log('res', res);
      console.log('default', res.default());
    },(err) => {
      console.log('err', err);
    })
  }
}
</script>
