<template>
  <div class="home">
    <home-header></home-header>
    {{home}}
  </div>
</template>

<script>
import homeHeader from '../components/Header'
export default {
  name: 'home',
  components: {
    homeHeader
  },
  data () {
    return {
      home: 'home'
    }
  }

}
</script>

<style>
</style>
