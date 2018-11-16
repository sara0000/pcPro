<template>
  <div class="loginBox">
    <img src="../assets/images/logo.png" alt="患友家" width="154" height="80">
    <h2>互帮互助，患友故事分享社区</h2>
    <div class="formBox">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!--密码登录-->
        <el-tab-pane label="密码登录" name="first">
          <el-form  :model="pswordLabelAlign">
            <el-form-item >
              <el-input v-model="pswordLabelAlign.name" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="pswordLabelAlign.region " placeholder="密码"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <!--短信登录-->
        <el-tab-pane label="短信登录" name="second">
          <el-form  :model="msgLabelAlign">
            <el-form-item >
              <el-input v-model="msgLabelAlign.name" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item >
              <el-row justify="space-between" class="codeRow"><el-col :span="16"><el-input v-model="msgLabelAlign.region" placeholder="请输入短信验证码"></el-input></el-col> <el-col :span="8"><button  class="code">获取验证码</button></el-col></el-row>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-row class="fogetBox">
          <router-link to="/register">注册</router-link><span style="padding:0 4px;float: right">|</span> <router-link to="/forgetPassword">忘记密码?</router-link>
        </el-row>
        <el-row>
          <el-button  @click="submitForm('dynamicValidateForm')" class="loginBtn">登录</el-button>
        </el-row>
      </el-tabs>
    </div>
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
<style scoped lang="scss">
  $color: #ff9a95;
  $grey:#999999;
  $darkgrey:#444344;
  $white:#fff;
  $size20:20px;
  input{
    font-size: 18px;
  }
  .grey{
     color: $grey;
  }
  .loginBox{
    background: $color ;
    height: 100%;
    padding-top: 10px;
  }
  .right{
    float: right;
  }
  .border-color{
    border:1px solid $color;
  }

 h2{
   height: 74px;
   line-height: 74px;
   font-weight: bold;
   font-size: $size20;
 }
.formBox{
  background: $white;
  width: 430px;
  margin: 0 auto 190px;
  padding: 31px 35px;
  border-radius: 8px;
    .fogetBox{
      padding: 20px 0 40px;
      color: #999;
        a{
          color: #999;
          font-size: 18px;
         display: inline-block;
          float: right;
            &:hover{
              color: #ff8680;
            }
        }
    }
}
  .loginBtn{
    width: 100%;
    background: $color;
    color: $white;
    font-size: $size20;
      &:hover{
        background: #ff8680;
      }
  }
  .el-input input{
    border: 1px solid $color !important;
  }
  .code{
    width: 100%;
    background: $color;
    font-size: 18px;
    height: 46px;
    line-height: 46px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
       &:hover{
          background: #ff8680;
       }

  }
</style>
<style lang="scss">
  $color: #ffcac8;
  $darkgrey:#444344;
  $grey:#999999;
  .loginBox{
    .el-input__inner{
      border:1px solid $color !important;
      font-size: 18px;
    }
    .el-tabs__item{
      color: $grey;
      font-size: 18px;
    }
    .el-tabs__item.is-active,.el-tabs__item:hover{
      color: $darkgrey;
    }
    .el-tabs__active-bar{
      background-color:$color;
      height:3px;

    }
    .loginBtn.el-button{
      border: 1px solid $color;
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
  }

</style>
