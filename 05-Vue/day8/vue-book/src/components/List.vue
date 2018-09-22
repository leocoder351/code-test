<template>
  <div>
    <MHeader>列表页</MHeader>
    <div class="content" ref="listScroll" @scroll="onLoadMore">
      <ul>
        <router-link 
          tag="li" 
          v-for="(book, index) in allBooks" 
          :to="{name: 'detail', params: {bid: book.bookId}}" 
          :key="index">
          <!-- <img :src="book.bookCover" alt="book-cover" :title="book.bookInfo"> -->
          <img v-lazy="book.bookCover" alt="book-cover" :title="book.bookInfo">
          <div>
            <h4>{{ book.bookName }}</h4>
            <p>{{ book.bookInfo }}</p>
            <b>￥ {{ book.bookPrice }}</b>
            <div class="btn-list">
              <button @click.stop="onRemoveBook(book.bookId)">删除</button>
              <button @click.stop="onAddBook(book.bookId)">添加</button>
            </div>
          </div>
        </router-link>
      </ul>
      <template v-if="isLoading">
        <Loading></Loading>
      </template>
      <template v-else>
        <div class="bottom-tips" @click="onGetMoreBooks" v-show="hasMore">加载更多....</div>
        <div class="bottom-tips" v-show="!hasMore">到底了~</div>
      </template>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import Loading from '../base/Loading';
  import { getAllBooks, removeBook, getBookListpagination } from '../api';

  export default {
    data() {
      return {
        allBooks: [],
        offset: 0,
        pageSize: 5,
        hasMore: true,
        isLoading: false,
        timer: null
      }
    },
    created() {
      // this.onGetAllBooks();
      this.onGetBookListpagination();
    },
    methods: {
      async onGetAllBooks() {
        try {
          this.allBooks = await getAllBooks();
        } catch (e) {
          console.warn(e);
        } 
      },

      async onRemoveBook(id) {
        try {
          await removeBook(id);
          this.allBooks = this.allBooks.filter((book) => book.bookId !== parseInt(id));
        } catch (e) {
          console.warn(e);
        }
      },

      async onAddBook(id) {

      },

      // 分页获取图书列表
      async onGetBookListpagination() {
        try {
          if (!this.hasMore || this.isLoading) return ;
          console.log(111)
          this.isLoading = true;
          let { books, hasMore } = await getBookListpagination(this.offset, this.pageSize);
          this.allBooks = [...this.allBooks, ...books];
          this.hasMore = hasMore;
          this.offset = this.allBooks.length;
          this.isLoading = false;
        } catch (e) {
          console.warn(e);
        }
      },

      // 点击加载更多
      onGetMoreBooks() {
        this.onGetBookListpagination();
      },

      // 向下滑动加载更多
      onLoadMore() {
        // scrollTop：卷去的高度
        // clientHeight：元素可见区域高度
        // scrollHeight：总高度
       
        // 函数防抖
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
           console.log(111);
          let { scrollTop, clientHeight, scrollHeight } = this.$refs.listScroll;
          if (scrollTop + clientHeight + 20 > scrollHeight) {
            this.onGetBookListpagination();
          }
        }, 100);
      }
    },
    computed: {

    },
    components: {
      MHeader, Loading
    }
  }
</script>

<style scoped lang="less">
  .content {
    h4 {
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 15px;
    }

    ul {
      padding: 10px;

      li {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid #f1f1f1;

        img {
          width: 150px;
        }

        .btn-list {
          display: flex;
          justify-content: flex-start;
        }
 
        &:last-child {
          border-bottom: none;
        }

        div {
          p {
            color: #2a2a2a;
            line-height: 25px;
          }

          b {
            display: inline-block;
            margin-top: 30px;
            color: red;
          }

          button {
            display: block;
            width: 60px;
            height: 25px;
            margin-right: 10px;
            background: brown;
            color: #fff;
            border: none;
            border-radius: 5px;
            outline: none;
          }
        }
      }
    }

    .bottom-tips {
      width: 100%;
      padding: 10px 10px 20px 10px;
      text-align: center;
      color: #333;
    }
  }
</style>
