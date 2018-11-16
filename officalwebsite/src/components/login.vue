<template>
  <div class="formBox">
    <h2>login</h2>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!--密码登录-->
      <el-tab-pane label="密码登录" name="first">
        <el-form :label-position="labelPosition" label-width="0px" :model="pswordLabelAlign">
          <el-form-item label="">
            <el-input v-model="pswordLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="pswordLabelAlign.region"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <!--短信登录-->
      <el-tab-pane label="短信登录" name="second">
        <el-form :label-position="labelPosition" label-width="0px" :model="msgLabelAlign">
          <el-form-item label="">
            <el-input v-model="msgLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="msgLabelAlign.region"></el-input>
          </el-form-item>
        </el-form>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')">登录</el-button>
        </el-form-item>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      activeName: 'first',
      labelPosition: 'right',
      pswordLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      msgLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods: {
    //面板切换
    handleClick(tab, event) {
      console.log(tab, event);

    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formBox{
  width: 502px;
  margin: 0 auto;
}
</style>
