import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './router'
Vue.use(vueRouter);
let bus = new Vue();
Vue.prototype.$bus = bus;
Vue.config.productionTip = false;
Vue.prototype.$eventBus=new Vue();
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
