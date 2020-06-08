<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe663;</div>
    </div>
    <div class="header-input">
      <input placeholder="输入/城市/景点/游玩主题" />
      <span class="iconfont search-icon">&#xe651;</span>
    </div>
    <div class="header-right">
      <span>城市</span>
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/config.styl';
.header
  display: flex
  justify-content: space-between
  line-height .86rem
  background-color #00bcd4
  color: #fff
  .header-left
    width: .64rem
    .back-icon
      text-align: center
      font-size: .35rem
      margin-top: 0.02rem
  .header-input
    position relative
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    border-radius: .1rem
    padding-left: .55rem
    background-color: #fff
    .search-icon
      position: absolute
      left: .2rem
      top: .05rem
    color: #ccc
  .header-right
    width 1.24rem
    text-align: center
    .arrow-icon
      font-size: .24rem
      margin-top: 0.02rem
</style>
