// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

Vue.use(VueFire)
var config = {
  apiKey: 'AIzaSyDi_I-vOsvRulnBsHPr8ER6dlF6KIksOk8',
  authDomain: 'neuralcar-1524307186929.firebaseapp.com',
  databaseURL: 'https://neuralcar-1524307186929.firebaseio.com',
  projectId: 'neuralcar-1524307186929',
  storageBucket: 'neuralcar-1524307186929.appspot.com',
  messagingSenderId: '1087596213113'
}
firebase.initializeApp(config)
export const db = firebase.firestore()
export const storageRef = firebase.storage().ref()

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
