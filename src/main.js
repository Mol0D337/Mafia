import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Loader from '@/components/app/Loader'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;
Vue.use(Vuelidate );
Vue.component('Loader', Loader);

firebase.initializeApp ({
  apiKey: "AIzaSyA9_egP5H-Wq7ZBbtDkMAcfYpXg6tc2Ri0",
  authDomain: "mafiavue.firebaseapp.com",
  databaseURL: "https://mafiavue.firebaseio.com",
  projectId: "mafiavue",
  storageBucket: "mafiavue.appspot.com",
  messagingSenderId: "101165937559",
  appId: "1:101165937559:web:e312b6a0bd65f4ff78cad2",
  measurementId: "G-3ESWQKT1XQ"
});

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});


