import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import fastClick from 'fastclick'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper,)
// Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render: h => h(App),
  template: '<App/>'
})
