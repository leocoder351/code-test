Vue.config.devtools = true;
let vm = new Vue({
  el: '#app',
  data: {
    title: '',
    current: '',
    todos: []
  },
  directives: {
    focusInput(el, bindings) {
      if (bindings.value) {
        // 当current === todo的时候
        el.focus(); // 获取焦点
      }
    }
  },
  watch: {
    // watch默认只监控一层数据变化，深度监控
    todos: {
      deep: true,
      handler() {
        // 默认写函数时就相当于写handler
        localStorage.setItem('data', JSON.stringify(this.todos));
      }
    }
  },
  created() {

    let data = localStorage.getItem('data');
    if (data) {
      this.todos = JSON.parse(localStorage.getItem('data'));
    }
  },
  methods: {
    add() {
      if (!this.title) return ;
      this.todos.push({title: this.title, isSelected: false});
      this.title = '';
    },
    remove(todo) {
      this.todos = this.todos.filter((item) => item !== todo);
    },
    remember(todo) {
      // todo是当前点击的那一项
      this.current = todo;
    },
    clearRemember() {
      this.current = '';
    }
  },
  computed: {
    unCompelete() {
      return this.todos.reduce((prev, next) => {
        if (!next.isSelected) prev++;
        return prev;
      }, 0);
    }
  }
});

// 1. 将数据循环到页面上
// 2. 敲回车时添加新数据（需要加入isSelected属性）
// 3. 删除功能
// 4. 计算当前没有被选中的个数