<template>
  <div>
    <head-bar :logo="logoMsg" v-on:childValue="childByValue"></head-bar>
    <div>{{this.$route.params.userId}}，您好！</div>
    <div style="overflow:hidden;">
      <side-bar ></side-bar>
      <router-view></router-view>
    </div>
    <!--子组件中定义使用或者未使用，然后传递到父组件的值-->
    {{name}}
    <foot-bar :linkCompany="Companys" ></foot-bar>
  </div>

</template>

<script>
  import headBar from './common/head'
  import footBar from './common/foot'
  import sideBar from './common/sideBar'
  export default {
    name: "home",
    data(){
      return {
        logoMsg:'患友家',
        Companys:['全国xx患者官网','全国十大程序VB'],
        name:''
      }
    },
    methods:{
      childByValue(val){
        console.log(val)
        this.name=val;
      }
    },
    components:{
      footBar,headBar,sideBar
    },
    created(){
      console.log(this.$route.path);
      console.log(this.$refs.sideBar);
    },
    mounted(){

    }
  }
</script>

<style scoped>

</style>
