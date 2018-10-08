<template>
  <div>
    <div class="hello-bem hello-bem--init">
      <button class="hello-bem__btn" @click="increment">加1 +1</button>
      <button class="hello-bem__btn" @click="decrement">减1 -1</button>
      <h3>Count is {{ count }}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "HelloWorld",
  computed: {
    ...mapGetters({
      count: 'getCount'
    })
  },
  methods: {
    test() {
      alert('测试初始化方法成功');
    },
    ...mapActions(['increment', 'decrement'])
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
