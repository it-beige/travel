<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/search'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      this.axios.get('/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  }
}
</script>

<style lang="stylus" scope></style>
