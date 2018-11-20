<template>
  <div>
    <head-bar></head-bar>
    <div>{{this.$route.params.userId}}，您好！</div>
    <div style="overflow:hidden;">
      <side-bar ></side-bar>
      <router-view></router-view>
    </div>

    <foot-bar></foot-bar>
  </div>

</template>

<script>
  import headBar from './common/head'
  import footBar from './common/foot'
  import sideBar from './common/sideBar'
  export default {
    name: "home",
    components:{
      footBar,headBar,sideBar
    },
    created(){
      console.log(this.$route.path)
      console.log(this.$refs.sideBar)
    },
    mounted(){

    }
  }
</script>

<style scoped>

</style>
