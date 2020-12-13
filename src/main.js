import Vue from 'vue'
import App from './App.vue'
import router from './router/web';


// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm.min';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')

