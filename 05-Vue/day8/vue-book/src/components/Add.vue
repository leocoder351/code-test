<template>
  <div>
    <MHeader>添加</MHeader>
    <div class="content">
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
          <label for="bookPrice">书的封面</label>
          <input type="text" v-model="book.bookCover" id="bookPrice">
        </li>
        <li>
          <button @click="onAddBook">确认添加</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  import { addBook } from '../api';

  export default {
    data() {
      return {
        book: {}
      }
    },
    methods: {
      async onAddBook() {
        try {
          await addBook({
            book: this.book
          });
        } catch (e) {
          console.warn(e);
        }
      }
    },
    computed: {

    },
    components: {
      MHeader
    }
  }
</script>

<style scoped lang="less">
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
</style>
