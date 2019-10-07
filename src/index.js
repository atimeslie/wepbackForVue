import Vue from 'vue'
import app from './app.vue'
import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'

Vue.use(VueRx, Rx)

/* eslint-disable */
new Vue({
  el: '#app',
  components: { app },
  template: '<app/>'
})
/* eslint-disable */
