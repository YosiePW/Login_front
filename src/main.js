import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8000/api'
const token = localStorage.getItem('Authorization')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  methods: {
    isAuthenticate : function(){
      if(localStorage.getItem("Authorization")){
        let conf = { headers : {"Authorization" : "Bearer " + localStorage.getItem("Authorization")} };
         this.axios.get("/login/check", conf)
             .then(response => {
                if(response.data.auth == false || response.data.status == 0){
                    this.$store.commit('logout')
                } else {
                    this.$store.commit('userDetail', response.data.user)
                }
              })
      .catch(error => {
        this.$store.commit('logout')
      });
      } else {
      this.$store.commit('logout')
      }
    },
  },
  mounted(){
    this.isAuthenticate()
  },
  render: h => h(App)
}).$mount('#app')
