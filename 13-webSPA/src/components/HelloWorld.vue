<template>
  <div>
    <h2>{{ msg }}</h2>
    <div class="hello-bem hello-bem--init">
      <button class="hello-bem__btn" @click="test">加1 +1</button>
      <button class="hello-bem__btn">减1 -1</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    test() {
      alert('测试初始化方法成功');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello-bem {
  border: 1px solid yellowgreen;
  border-radius: 5px;
}

.hello-bem__btn {
  background: #ff9800;
  border: 2px solid brown;
  padding: 5px;
}

.hello-bem--init {
  padding: 1em;
}
</style>
