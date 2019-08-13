<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper> 
  </div>
  
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        speed: 1000,
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
<style scoped lang="stylus">
  //样式穿透，不受scoped限制， 让wrapper 里面只要有.swiper-pagination-bullet-active就显示为白色
  .wrapper >>> .swiper-pagination-bullet-active
      background: #fff !important 
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%  //wrapper宽度是100%，高度相对于宽度自动撑开31.25%，这样就实现了宽高比例始终保持31.25的比例
    background: #eee
    .swiper-img
      width: 100%

</style>