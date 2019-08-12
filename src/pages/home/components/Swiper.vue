<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper> 
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      swiperList: [
      {
        id: '0001',
        imgUrl:'//h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg'
      },
      {
        id: '0002',
        imgUrl:'//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg'
      }
      ]
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