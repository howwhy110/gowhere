<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: 
      [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg',
          title: '武汉海昌极地海洋公园',
          desc: 'hwhei'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/201405/27/11a29c646d897af77648bc3d98949107.jpg_200x200_0b6014b8.jpg',
          title: '武汉九峰森林动物园',
          desc: 'adasdfi'
        },{
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1509/e4/13982f434b44af687916965e351c02fc.water.jpg_200x200_01e8588f.jpg',
          title: '金龙水寨旅游景区',
          desc: 'asdgfhwhei'
        }
      ]
    }
  }
}
</script>
<style scoped lang="stylus">
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem

  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem 
      padding: .4em
      border-radius: .3rem
    .item-info
       flex: 1
       padding: .1rem
       min-width: 0
       .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff

</style>