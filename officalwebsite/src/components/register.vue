<template>
  <div class="registerContainer">
    <header>
      <div class="toLogin"><img src="../assets/images/logo2.png" alt="患友家"><div class="right">已有账号，<router-link to="/login"><strong>马上登录</strong></router-link></div></div>
      <div class="stepSign">
        <img src="../assets/images/step1.jpg" alt="" v-if="stepFlag==1">
        <img src="../assets/images/step2.png" alt="" v-if="stepFlag==2">
        <img src="../assets/images/step3.png" alt="" v-if="stepFlag==3">
      </div>
    </header>
    <div class="title">
      <h2 v-if="stepFlag==1">注册会员</h2>
      <h2 v-if="stepFlag==2">完善资料</h2>
      <h2 v-if="stepFlag==3">注册成功</h2>
    </div>
    <div class="registerBox">
      <!--注册第一步-->
      <div id="resigterStep1" v-if="stepFlag==1">
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
          <button @click="stepFlag=2;roleFlag=3" class="btnCommon">下一步</button>
        </el-form>
      </div>
      <!--注册第二步-->
      <div id="resigterStep2" v-if="stepFlag==2">
        <!--企业资料完善-->
        <form action="" class="stepForm2-company" v-if="roleFlag==1">
          <label><i>*</i>企业全称：<input type="text" placeholder="请输入企业全称"></label>
          <label><i>*</i>姓名：<input type="text" placeholder="请输入姓名"></label>
          <label><i>*</i>部门：<input type="text" placeholder="请输入部门"></label>
          <label><i>*</i>联系电话：<input type="text" placeholder="请输入联系电话"></label>
          <label><i>*</i>邮箱：<input type="text" placeholder="请输入邮箱"></label>
          <label>职位：<input type="text" placeholder="请输入您所在公司的职位"></label>
          <label>公司产品：<input type="text" placeholder="请输入公司产品"></label>
          <label><i>*</i>公司地址：<input type="text" placeholder="请填写常用的手机号"></label>
          <label><i>*</i>其他联系方式：<input type="text" placeholder="请填写微信号、QQ号"></label>
          <label><p style="width: 430px;"><input type="checkbox" style="margin-right: 16px">我同意<span style="color: #ff8680">《皓推科技用户协议》</span></p></label>
        </form>
        <!--医生资料完善-->
        <form action="" class="stepForm2-doctor" v-if="roleFlag==2">
          <label>推荐人编号/手机号：<input type="text" placeholder="请输入推荐人编号、手机号"></label>
          <label><i>*</i>姓名：<input type="text" placeholder="请输入姓名"></label>
          <label><i></i>昵称：<input type="text" placeholder="请输入昵称"></label>
          <label><i>*</i>年龄：<input type="text" placeholder="请输入年龄"></label>
          <label><i>*</i>联系电话：<input type="text" placeholder="请输入联系电话"></label>
          <label><i>*</i>科室：<input type="text" placeholder="请填写科室"></label>
          <label><i>*</i>所属医院：<input type="text" placeholder="请填写所属医院"></label>
          <label><i>*</i>其他联系方式：<input type="text" placeholder="请填写微信号、QQ号" /></label>
          <label><p style="width: 430px;"><input type="checkbox" style="margin-right: 16px">我同意<span style="color: #ff8680">《医者江湖用户协议》</span></p></label>
        </form>
        <!--患者资料完善-->
        <form action="" class="stepForm2-sick" v-if="roleFlag==3">
          <label>推荐人编号/手机号：<input type="text" placeholder="请输入推荐人编号、手机号"></label>
          <label><i>*</i>姓名：<input type="text" placeholder="请输入姓名"></label>
          <label><i>*</i>年龄：<input type="text" placeholder="请输入年龄"></label>
          <label><i>*</i>性别：<el-radio-group >
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
          </label>
          <label><i>*</i>联系电话：<input type="text" placeholder="请输入联系电话"></label>
          <label><i>*</i>体重：<input type="text" placeholder="请输入体重"></label>
          <label><i>*</i>身高：<input type="text" placeholder="请输入身高"></label>
          <label><i>*</i>所患疾病：<input type="text" placeholder="请输入所患疾病"></label>
          <label>用药情况：<input type="text" placeholder="请填写详细的用药情况"></label>
          <label><i>*</i>家属联系方式：<input type="text" placeholder="请填写常用的手机号"></label>
          <label><i>*</i>其他联系方式：<input type="text" placeholder="请填写微信号、QQ号"></label>
          <label><i>*</i>现居住地：
            <!--<el-input type="textarea"></el-input>-->
            <textarea  placeholder="请如实填写详细住址，例如街道、单元、楼层和门牌号等信息" style="height: 66px;width:326px;line-height: 24px;padding: 12px;"/>
          </label>
          <label style="overflow:hidden;vertical-align: middle"><i>*</i><span style="line-height: 160px">病例资料图片：</span>
            <div style="width: 350px;height:160px;float:right;border: 1px solid #999;text-align: center;padding-top: 40px;border-radius: 10px;background: #fff">
              <p>最少上传一张病例图片</p>
              <button class="add"></button>
             </div>
          </label>
          <label><p style="width: 430px;"><input type="checkbox" style="margin-right: 16px">我同意<span style="color: #ff8680">《患友家用户协议》</span></p></label>
        </form>
        <div style="margin-top: 52px"><button @click="stepFlag=3" class="btnCommon" style="margin-left: 18px">注册</button></div>
      </div>
      <!--注册第三步-->
      <div id="resigterStep3" v-if="stepFlag==3">
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
      stepFlag:1,
      roleFlag:3
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
.btnCommon{
  background: #ff8680;
  color: #fff;
  padding: 16px 42px ;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
    &:hover{

    }
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
  #resigterStep3{
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
  .qrCode{
    margin-top: 60px;
  }
}
  #resigterStep2{
    width: 543px;
    margin-left: -100px;
      form{
        label{
          display: block;
          text-align: right;
          color: #444344;
          margin-bottom: 34px;
          i{
            color: #e90b00;
            vertical-align: middle;
          }
          input[type=text],textarea{
            width: 326px;
            height: 16px;
            border: 1px solid #999;
            background: #fff;
            border-radius: 10px;
            padding: 12px;
          }
          label{
            display: inline-block;
            float: left;
          }
          .el-radio-group{
            width: 350px;
            height: 20px;
          }
        }
        .add{
          width: 40px;
          height: 41px;
          margin-top: 20px;
          background: url("../assets/images/add.png") no-repeat center;
        }
      }
    input[focus]{
      outline: red;
    }
  }


</style>
<style lang="scss">
  $darkColor:#ff9e99;
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
button{
  cursor: pointer;
}
</style>
