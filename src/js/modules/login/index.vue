<template>
    <div class="login-wrapper">
        <div class="top" ref="top">
            <image :src="comImg" class="logo"></image>
            <text class="name">欢迎使用帅强管理系统</text>
            <text class="welcome">{{name}} 欢迎回来！</text>
        </div>
        <div class="input-group">
            <div class="row">
                <text class="iconfont">&#xe608</text>
                <input type="tel" return-key-type='done' ref="username" :style="'#333'" placeholder="请输入手机号"
                       maxlength="11" class="input" :value="tel" @input="onNameinput"/>
                <text class="iconfont icon-clear" @click="clear">{{iconClear}}</text>
            </div>
            <div class="row">
                <text class="iconfont">&#xe600</text>
                <input type="password" return-key-type='done' ref="password" placeholder="请输入密码"
                       class="input" @input="onPwdinput"/>
                <text class="iconfont"></text>
            </div>
            <text class="btns" @click="login">{{loginText}}</text>
        </div>
    </div>
</template>

<script>
  import units from '../../components/units'
  export default {
    data(){
      return {
        comImg: "https://img.1000.com/ehome/dev/yanglao/22-024159_8_1513785914434.jpg",
        name: "强帅",
        tel: "",
        password: "",
        iconClear: "",
        loginText: "登录"
      }
    },
    beforeCreate(){
      units.initIconFont();
    },
    methods: {
      clear: function () {
        this.tel = "";
      },
      login: function () {
        if (this.tel == "18252021258" && this.password == "111111") {
          alert("登录成功");
        } else {
          alert("登录失败")
        }
      },
      onNameinput: function (e) {
        this.tel = e.value;
        console.log("登录名：" + this.tel);
      },
      onPwdinput: function (e) {
        this.password = e.value;
        console.log("密码：" + this.password);
      }
    }
  }
</script>

<style scoped>
    .login-wrapper {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #4f9aff;
        padding-top: 50px;
    }

    .logo {
        width: 180px;
        height: 180px;
        border-radius: 90px;
        box-shadow: 0px 0px 27px 0px rgba(4, 0, 0, 0.23);
    }

    .top {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 110px;
        margin-bottom: 90px;
    }

    .name {
        font-size: 32px;
        color: #fff;
        margin-top: 50px;
    }

    .welcome {
        font-size: 32px;
        color: #fff;
        margin-top: 20px;
    }

    .input-group {
        margin-left: 55px;
        margin-right: 55px;
    }

    .iconfont {
        font-family: 'iconfont';
        font-size: 35px;
        color: #fff;
    }

    .input {
        flex: 1;
        padding-left: 31px;
        font-size: 26px;
        color: #333;
        background-color: transparent;
        placeholder-color: #fff;
    }

    .row {
        height: 80px;
        margin-top: 40px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 40px;
        padding-right: 40px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(255, 2555, 255, .25);
        border-radius: 10px;
    }

    .btns {
        margin-top: 110px;
        padding-top: 25px;
        padding-bottom: 25px;
        font-size: 32px;
        color: #4f9aff;
        background-color: #fff;
        border-radius: 10px;
        text-align: center;
    }

    .btns:active {
        background-color: rgba(0, 0, 0, .2);
    }

    .wx-text {
        font-size: 20px;
        color: #fff;
        margin-top: 9px;
    }
</style>