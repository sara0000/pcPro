<template>
  <div class="registerContainer">
    <header>
      <div class="stepSign">
        <img src="../assets/images/logo3.png" alt="患友家">
      </div>
    </header>
    <div class="title">
      <h2>账户安全</h2>
    </div>
    <div class="registerBox">
      <div class="findPass"  v-if="!resetFlag" >
        <h4>找回密码</h4>
        <div id="findStep1">
          <el-form :model="registerForm" status-icon   class="demo-ruleForm">
            <el-form-item >
              <el-input v-model="registerForm.name" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item >
              <el-row justify="space-between" class="codeRow"><el-col :span="16"><el-input v-model="registerForm.region" placeholder="请输入短信验证码"></el-input></el-col> <el-col :span="8"><button  class="code">获取验证码</button></el-col></el-row>
            </el-form-item>
            <el-form-item  prop="pass">
              <el-input type="text" v-model="registerForm.pass" autocomplete="off" placeholder="设置密码"></el-input>
            </el-form-item>
            <el-form-item  prop="pass">
              <el-input type="text" v-model="registerForm.pass2" autocomplete="off" placeholder="确认密码"></el-input>
            </el-form-item>
           <div class="nextBtn"><a @click="resetFlag=1" >重置密码</a></div>
          </el-form>
        </div>
      </div>
      <div class="findSuccess"  v-if="resetFlag">
        <h4 class="">找回密码</h4>
        <div id="findStep2">
        <p style="margin-top: 50px">你已经成功设置密码，请使用新密码登录</p>
          <div class="nextBtn"><router-link to="/login">马上登录</router-link></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'forgetPassword',
  data () {
    return {
      registerForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      resetFlag:0
    }
  },
  methods:{
    submitForm(){
      this.data.resetFlag=1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $color: #ffcac8;
  $darkColor:#ff9e99;
  $darkgrey:#444344;
.registerContainer{
  width: 900px;
  margin: 0 auto;
    .toLogin{
      position: relative;
      overflow: hidden;
      margin: 48px auto 30px;
      img{
        position: absolute;
        left: 0;
        top: 0;
      }
      .right{
        height: 93px;
        line-height: 93px;
        color: #888888;
        font-size: 18px;
        strong{
          color: $darkColor;
        }
      }

    }
  .stepSign{
    margin-bottom: 28px;
  }
    .title{
      background: $darkColor;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      h2{
        font-size: 30px;
        color: $darkgrey;
        font-weight: bold;
        line-height: 60px;
        height: 60px;
      }
    }
  .registerBox{
    width: 402px;
    margin: 0 auto;
    padding:35px 248px;
    background: #d5efff;
    h4{
      margin-bottom: 24px;
    }
      h4,p{
        font-size: 22px;
        color: $darkgrey;
      }
    p{
      line-height: 32px;
      margin-top: 40px;
    }

  }
  /*下一步按钮*/
  .nextBtn a{
    padding: 16px 42px;
    font-size: 18px;
    color:#fff;
    background:$darkColor ;
    border: 1px solid $darkColor;
    outline: 0;
    border-radius: 10px;
    display: inline-block;
    margin-top: 68px;
  }
  /*验证码按钮*/
  .code{
    color: #444344;
    font-size: 18px;
    width: 134px;
    line-height: 56px;
    background:$color;
    border: 1px solid $color;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
  }
  .code:hover, .nextBtn a:hover{
    cursor:pointer;
  }
 #resigterStep1  p{
    color: #a4a4a4;
    font-size: 14px;
  }
  #resigterStep2{
    P{
      font-size: 18px;
      width: 303px;
      color:#444344 ;
      line-height: 38px;

      margin: 0 auto 20px;
    }
    span{
      color:#fe0000;
    }
    strong{
      color: #fe0000;
      font-size: 22px;
    }
  }
  .findSuccess{
    padding-bottom: 228px;
  }
  .qrCode{
    margin-top: 60px;
  }

}


</style>
<style lang="scss">
  .registerBox{
    .el-input__inner{
      height: 60px;
      color: #999999;
      font-size: 16px;
      font-weight: bold;
    }
    .codeText .el-input__inner{
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

</style>
