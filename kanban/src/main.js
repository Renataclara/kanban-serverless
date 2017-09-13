// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import Vuefire from 'vuefire'

Vue.config.productionTip = false

  // Initialize Firebase
var config = {
  databaseURL: 'https://kanban-5838e.firebaseio.com',
  projectId: 'kanban-5838e'
}

var firebaseapp = firebase.initializeApp(config)

Vue.prototype.$db = firebaseapp.database()

Vue.use(Vuefire)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
