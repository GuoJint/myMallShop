import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueAxios from 'vue-axios'
import router from './routers/router'
import env from './env'


//本项目使用mock api 使用cors跨域或者jsonp跨域
const mock = true
if(mock){
  require('./mock/api')
}
//此为代理
// axios.defaults.baseURL = '/api'   //默认为代理url，如果使用cors，josnp跨域则需要https等地址  
axios.defaults.timeout = 8000
//此为跨域
axios.defaults.baseURL =env.baseURL
//请求拦截大多是后台管理系统
//接口拦截
axios.interceptors.response.use((response)=>{
  let res = response.data
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
})

vueAxios.use(vueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
