<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  html,body{
    height: 100%;
  }
$color:#ffcac8;
$darkgrey:#444344;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.el-input__inner{
  height: 46px;
  line-height: 46px;
}
.codeRow .el-input__inner{
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.codeRow .el-button{
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 0;
}
  .left{
    float: left;
  }
  .right{
    float: right;
  }
</style>
