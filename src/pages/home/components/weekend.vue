<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>  
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: 
      [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
          title: '武汉海昌极地海洋公园',
          desc: 'hwhei'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg',
          title: '含往返飞机票（含住宿）',
          desc: 'adasdfi'
        },{
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/p/p3/1809/e5/59de4bd338291802.jpg_256x160_98c152cd.jpg',
          title: '武汉往返火车票+3晚住宿',
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
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
      padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
</style>