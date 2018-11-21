<template>
  <div class="loginBox">
    <img src="../assets/images/logo.png" alt="患友家" width="154" height="80">
    <h2>互帮互助，患友故事分享社区</h2>
    <div class="formBox">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!--密码登录-->
        <el-tab-pane label="密码登录" name="first">
          <el-form  :model="pswordLabelAlign" :rules="rules" ref="pswordLabelAlign">
            <el-form-item >
              <el-input v-model="pswordLabelAlign.name" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="pswordLabelAlign.pass " placeholder="密码"></el-input>
            </el-form-item>
          </el-form>
          <i v-model="pswordLabelAlign.type"></i>
        </el-tab-pane>
        <!--短信登录-->
        <el-tab-pane label="短信登录" name="second">
          <el-form  :model="msgLabelAlign">
            <el-form-item >
              <el-input v-model="msgLabelAlign.name" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item >
              <el-row justify="space-between" class="codeRow"><el-col :span="16"><el-input v-model="msgLabelAlign.code" placeholder="请输入短信验证码"></el-input></el-col> <el-col :span="8"><button  class="code">获取验证码</button></el-col></el-row>
            </el-form-item>
          </el-form>
          <i v-model="msgLabelAlign.type"></i>
        </el-tab-pane>
        <el-row class="fogetBox">
          <router-link to="/register">注册</router-link><span style="padding:0 4px;float: right">|</span> <router-link to="/forgetPassword">忘记密码?</router-link>
        </el-row>
        <el-row>
          <el-button  @click="submitForm()" class="loginBtn">登录</el-button>
        </el-row>
      </el-tabs>

    </div>

  </div>

</template>

<script>

import router from "../router";

export default {
  name: 'Login',
  data () {
    return {
      errors: [],
      activeName: 'first',
      labelPosition: 'right',
      pswordLabelAlign: {
        name: '',
        pass: '',
        type: ''
      },
      msgLabelAlign: {
        name: '',
        pass: '',
        type: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ]
      }
    }
  },
  //一个数据受多个数据影响
  computed:{
    lufei_Name(){
      return this.pswordLabelAlign.name+this.pswordLabelAlign.pass
    }
  },
  //监听输入框
  watch:{
    pswordLabelAlign :{
      handler(curVal,oldVal){
        console.log(curVal);

      },
      deep:true,
    }
  },
  methods: {
    //面板切换
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitForm(formName){
      window.localStorage.setItem('token','12323');
      localStorage.setItem('username',this.lufei_Name);
      console.log(localStorage.getItem('username'));
      // 登录API
      this.axios.post('/api/login',this.pswordLabelAlign).then(res=>{
       // console.log(res);
        //页面跳转
        this.$router.push({ path: 'home/user', params: { userId: 123 }})
      }).catch(function (error) {
        console.log(error);
      });
    },

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
  @mixin border-radiusCss($num:0px){
    border-bottom-right-radius:$num;
    border-top-right-radius: $num;
  }
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
   @include border-radiusCss(4px);
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
  @mixin border-px{
    border: 1px solid $color;
  }
  @mixin border-radiusCss($num:0px){
    border-bottom-right-radius:$num;
    border-top-right-radius: $num;
  }
  .loginBox{
    .el-input__inner{
     @include border-px;
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
     @include border-px;
    }
    .codeRow {
      .el-input__inner{
       @include border-radiusCss;
      }
      .el-button{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 0;
      }
    }
  }

</style>
