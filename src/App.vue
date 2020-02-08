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

<style lang="scss" scoped>
@import url('./assets/scss/reset.scss');
// @import url('./assets/scss/config.scss');
@import url('./assets/scss/mixin.scss');
</style>
