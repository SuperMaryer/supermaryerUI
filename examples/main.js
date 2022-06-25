import Vue from 'vue'
import App from './App.vue'


import '../components/css/demo.scss'
import '../components/css/card.scss'
import MyDemo from '../components/lib/demo/index.js'
import MyCard from '../components/lib/card/index.js'
Vue.use(MyDemo)
Vue.use(MyCard)

// import 'supermaryer-ui/dist/css/index.css';
// import MUI from 'supermaryer-ui';
// Vue.use(MUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
