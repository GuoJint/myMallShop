<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
  mounted(){
    // // https://www.easy-mock.com/mock/5e33c4969de97e2947886e28/example/mock
    // let url = "/search/hotwords"
    // axios.post(url)
    // .then((res)=>{
    //   console.log(res);
    // })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
