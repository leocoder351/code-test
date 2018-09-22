<template>
  <div class="detail">
    <MHeader :back="true">详情</MHeader>
    <ul class="container">
      <li>
        <label for="bookName">书的名称</label>
        <input type="text" v-model="book.bookName" id="bookName">
      </li>
      <li>
        <label for="bookInfo">书的信息</label>
        <input type="text" v-model="book.bookInfo" id="bookInfo">
      </li>
      <li>
        <label for="bookPrice">书的价格</label>
        <input type="text" v-model="book.bookPrice" id="bookPrice">
      </li>
      <li>
        <button @click="onUpdateBook">确认修改</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import { getOneBook, updateBook } from '../api';

  export default {
    data() {
      return {
        book: {}
      }
    },
    created() {
      // 页面一加载，需要根据id发送请求
      this.onGetOneBook();
    },
    methods: {
      async onGetOneBook() {
        try {
          this.book = await getOneBook(this.bid);
          Object.keys(this.book).length > 0 ? void 0 : this.$router.replace('/list');
        } catch (e) {
          console.warn(e);
        }
      },

      async onUpdateBook() {
        try {
          await updateBook(this.bid, {
            book: this.book
          });
          this.$router.replace('/list');
        } catch (e) {
          console.warn(e);
        }
      }
    },
    computed: {
      bid() {
        return this.$route.params.bid;
      }
    },
    components: {
      MHeader
    }
  }
</script>

<style scoped lang="less">
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    padding-top: 40px;
    z-index: 100;

    .container {
      width: 90%;
      padding: 20px 0;
      margin: 0 auto;
    }

    label {
      display: block;
      font-size: 20px;
      margin-bottom: 10px;
    }

    input {
      display: block;
      padding: 5px;
      width: 100%;
      font-size: 20px;
      margin-bottom: 20px;
    }

    button {
      display: block;
      padding: 15px;
      font-size: 15px;
      background: #409eff;
      color: #fff;
      border: none;
      border-radius: 4px;
      outline: none;
    }
  }
</style>
