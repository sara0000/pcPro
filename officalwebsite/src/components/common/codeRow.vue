<template>
  <el-form-item >
    <el-row justify="space-between" class="codeRow"><el-col :span="18"><el-input v-model="msgLabelAlign.region" placeholder="请输入短信验证码"></el-input></el-col> <el-col :span="6"><el-button  class="code">获取验证码</el-button></el-col></el-row>
  </el-form-item>
</template>

<script>
    export default {
        name: "codeRow"
    }
</script>

<style lang="scss">
  .codeRow .el-input__inner{
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .codeRow .el-button{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
  }
</style>
