<template>
  <div class="registerContainer">
    <header>
      <div class="toLogin"><img src="../assets/images/logo2.png" alt="患友家"><div class="right">已有账号，<a href=""><strong>马上登录</strong></a></div></div>
      <div class="stepSign">
        <img src="../assets/images/step1.jpg" alt="" style="display: none;">
        <img src="../assets/images/step2.png" alt="" style="display: none">
        <img src="../assets/images/step3.png" alt="">
      </div>
    </header>
    <div class="title">
      <h2 style="display: none;">注册会员</h2>
      <h2 style="display: none;">完善资料</h2>
      <h2>注册成功</h2>
    </div>
    <div class="registerBox">
      <div id="resigterStep1" style="display: none">
        <el-form :model="registerForm" status-icon   class="demo-ruleForm">
          <el-form-item  prop="pass">
            <el-input type="text" v-model="registerForm.pass" autocomplete="off" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item  prop="checkPass">
            <el-input type="password" v-model="registerForm.checkPass" autocomplete="off" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item >
            <div class="codeBox">
              <div class="left"><el-input v-model="registerForm.region" placeholder="请输入短信验证码" class="codeText"></el-input></div>
              <div class="right"><button  class="code">获取验证码</button></div>
            </div>
          </el-form-item>
          <el-form-item  prop="pass">
            <el-input type="text" v-model="registerForm.pass" autocomplete="off" placeholder="设置密码"></el-input>
            <p>6-20位字符，由字母/数字/符号两种以上组合。</p>
          </el-form-item>
          <button @click="submitForm('registerForm')" class="nextBtn">下一步</button>
        </el-form>
      </div>
      <div id="resigterStep2">
        <p>您已注册成功，患友家客服人员会在<span>1-3</span>个工作日内联系您，请耐心等候！</p>
        <p>您也可以关注<strong>“患友家”</strong>公众号进行信息实时查询！</p>
        <div class="qrCode">
          <p>扫描二维码关注吧！</p>
          <img src="../assets/images/QRcode.jpg" alt="患友家">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import codeRow from './common/codeRow'
export default {
  name: 'Register',
  data () {
    return {
      registerForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
    }
  },
  components:{
    codeRow
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

  }
  /*下一步按钮*/
  .nextBtn{
    width: 120px;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    color:#fff;
    background:$darkColor ;
    border: 1px solid $darkColor;
    outline: 0;
    border-radius: 10px;
  }
  /*验证码按钮*/
  .code{
    color: #444344;
    font-size: 18px;
    width: 158px;
    line-height: 56px;
    background:$color;
    border: 1px solid $color;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
  }
  .code:hover, .nextBtn:hover{
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
      margin-bottom: 20px;
      margin: 0 auto;
    }
    span{
      color:#fe0000;
    }
    strong{
      color: #fe0000;
      font-size: 22px;
    }
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
