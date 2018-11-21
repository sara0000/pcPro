<template>
    <div>
      <!--子组件的数据来源 props和data-->
      <div id="logo">{{logo}}</div>
      <ul class="nav">
        <li v-for="nav in navs">{{nav.li}}</li>
      </ul>
      <button  @click="clickClick" >点击触发</button>
    </div>
</template>

<script>
    export default {
        name: "headBar",
      data(){
          return {
            navs:[
                    {li:'首页'},
                    {li:'产品介绍'},
                    {li:'案例分析'},
                    {li:'数据库查询'},
                    {li:'患友家'}
                  ],
            childValue:'子组件的值'
          }
      },

      props: ['logo'],
      methods:{
        clickClick(){
          this.$emit('childValue',this.childValue)
        }
      }
    }
</script>

<style scoped>

</style>
