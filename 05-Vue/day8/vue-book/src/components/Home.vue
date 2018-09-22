<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Loading v-if="isLoading" :marginTop="100"></Loading>
      <template v-else>
        <Swiper :swiperSliders="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="(hot, index) in hotBooks" :key="index">
              <img :src="hot.bookCover" :title="hot.bookInfo" alt="bookCover">
              <b>{{ hot.bookName }}</b>
            </li>
          </ul>
        </div>    
      </template>
    </div>
  </div>
</template>

<script>
  // 1. 引入组件
  // 2. 注册组件
  // 3. 使用组件
  import MHeader from '../base/MHeader';
  import Swiper from '../base/Swiper';
  import Loading from '../base/Loading';
  import { getSliders, getHotBooks, getAllHomeData } from '../api';

  export default {
    data() {
      return {
        sliders: [],
        hotBooks: [],
        isLoading: true
      }
    },
    created() {
      // this.onGetSliders();
      // this.onGetHotBooks();
      this.onGetAllHomeData();
    },
    methods: {
      async onGetSliders() {
        try {
          // 给data起别名，对象中的属性名字必须和得到的结果名字一致
          this.sliders = await getSliders();
        } catch (e) {
          console.warn(e);
        }
      },

      async onGetHotBooks() {
        try {
          // 给data起别名，对象中的属性名字必须和得到的结果名字一致
          this.hotBooks = await getHotBooks();
        } catch (e) {
          console.warn(e);
        }
      },

      async onGetAllHomeData() {
        try {
          let [sliders, hotBooks] = await getAllHomeData();
          this.sliders = sliders;
          this.hotBooks = hotBooks;
          // ...轮播图和热门图书已经获取完成
          this.isLoading = false;
        } catch (e) {
          console.warn(e);
        }
      }
    },
    computed: {

    },
    components: {
      MHeader, Swiper, Loading
    }
  }
</script>

<style scoped lang="less">
  .container {
    width: 90%;
    margin: 0 auto;

    h3 {
      color: #999;
      padding: 5px 0;
    }
  
    ul {
      display: flex;
      flex-wrap: wrap;  // 默认不换行，修改为换行
      padding-bottom: 10px;

      li {
        width: 50%;
        text-align: center;
        margin: 10px 0;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
