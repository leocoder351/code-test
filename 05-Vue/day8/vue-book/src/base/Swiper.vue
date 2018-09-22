<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(slide, index) in swiperSliders" :key="index">
      <img :src="slide" alt="slide-image">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    props: ['swiperSliders'],
    data() {
      return {
        swiperOption: {
          autoplay: 3500, 
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          observeParents: true,
          loop: true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
