<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom" >当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom" >热门城市</div>
          <div class="btn-list">
            <div class="btn-wrapper" v-for="item of hot" :key="item.id">
              <div class="btn">{{item.name}}</div>
            </div>
          </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom" >{{key}}</div>
        <div class="item-list">
          <div class="item border-topbottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden 
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    left: 0
    .title
      line-height: .66rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .btn-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .btn-wrapper
        width: 33.33%
        float: left
        .btn
          margin: .1rem
          padding: .1rem
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .64rem
        color: #666
        padding-left: .2rem      
</style>