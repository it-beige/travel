<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="slide-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scope>
.wrapper >>> .swiper-pagination-bullet-active
  background-color: #fff
.wrapper
  width: 100%
  height: 0
  padding-bottom: 31.25%
  background: #eee
  .slide-img
    width: 100%
    height: 100%

</style>
