import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './router'
import InfoS from "./vuex/Info_store"
import aMap from "vue-amap";
Vue.use(aMap)
aMap.initAMapApiLoader({
  key: '9669778f105c4811805a390b2a878a42',
  plugin: ['AMap.Geolocation', 'AMap.Geocoder']
});
Vue.use(vueRouter);
let bus = new Vue();
Vue.prototype.$bus = bus;
Vue.config.productionTip = false;
Vue.prototype.$eventBus=new Vue();
new Vue({
  render: h => h(App),
  router,
  InfoS,
}).$mount('#app')
