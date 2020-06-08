<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    {{home}}
  </div>
</template>

<script>
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
import HomeIcons from '../components/icons'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  data () {
    return {
      home: 'home',
      swiperList: [], // 轮播图数据
      iconList: [] // 图标数据
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      this.axios.get('/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      if (res.ret && res.data) {
        let data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
      }
    }
  }

}
</script>

<style>
</style>
